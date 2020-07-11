// const Config = require("config.js");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
// require('./Load')(bot);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
module.exports = {bot: bot};
// bot.login(Config.Token);
console.clear();
// const http = require("http"); // back  i die
// const express = require("express");
// const app = express();
// app.get("/", (request, response) => {
//   response.sendStatus(200);
// });
// app.listen(process.env.PORT);
// setInterval(() => {
//   http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
// }, 280000);

// Bot Isn't Coded By Me! [Ahmed]... Don't Forget To Make Your Project Private (Click Project Name > Make It Private)
// Don't Forget To Make Your Project Private (Click Project Name > Make It Private)
// Don't Forget To Make Your Project Private (Click Project Name > Make It Private)
// Don't Forget To Make Your Project Private (Click Project Name > Make It Private)
// Don't Forget To Make Your Project Private (Click Project Name > Make It Private)
// Don't Forget To Make Your Project Private (Click Project Name > Make It Private)
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const pretty = require("pretty-ms");
const queue = new Map();
var table = require("table").table;
// const Discord = require("discord.js");
const PREFIX = "!";
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//code

// Don't Forget To Make Your Project Private (Click Project Name > Make It Private)

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (message.content.startsWith(prefix + "bc")) {
    let filter = m => m.author.id === message.author.id;

    let recembed = new Discord.RichEmbed().setTitle(`\`DMall Bot\``)
      .setDescription(`
 -=-=-=-=-=-=-=-=-=-=
 🎖 Normal Message To A Specified Role
 
 🏅 Embed Message To A Specified Role
  
 📧 Normal Message To Everyone   

 📭 Embed Message To Everyone
  
 🔵 Normal Message To Online Members Only

 🔷 Embed Message To Online Members Only

 ❌ Cancel
 -=-=-=-=-=-=-=-=-=-=
 `);

    // Don't Forget To Make Your Project Private (Click Project Name > Make It Private)

    message.channel.sendEmbed(recembed).then(msg => {
      msg
        .react("🎖")
        .then(() => msg.react("🏅"))
        .then(() => msg.react("📧"))
        .then(() => msg.react("📭"))
        .then(() => msg.react("🔵"))
        .then(() => msg.react("🔷"))
        .then(() => msg.react("❌"));

      let embedmsgFilter = (reaction, user) =>
        reaction.emoji.name === "📭" && user.id === message.author.id;

      let normalmsgFilter = (reaction, user) =>
        reaction.emoji.name === "📧" && user.id === message.author.id;

      let cancelFilter = (reaction, user) =>
        reaction.emoji.name === "❌" && user.id === message.author.id;

      let onlyroleFilter = (reaction, user) =>
        reaction.emoji.name === "🎖" && user.id === message.author.id;
      8;

      let onlineonlyFilter = (reaction, user) =>
        reaction.emoji.name === "🔵" && user.id === message.author.id;
      8;

      let embedonlineonlyFilter = (reaction, user) =>
        reaction.emoji.name === "🔷" && user.id === message.author.id;
      8;

      let embedonlyroleFilter = (reaction, user) =>
        reaction.emoji.name === "🏅" && user.id === message.author.id;
      8;

      let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });

      let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });

      let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });

      let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, {
        time: 0
      });

      let onlineonly = msg.createReactionCollector(onlineonlyFilter, {
        time: 0
      });

      let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, {
        time: 0
      });

      let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });

      embedonlineonly.on("collect", r => {
        let msge;
        message.channel
          .send(
            ":pencil: **| Please Write Now The Message To Send :pencil2: **"
          )
          .then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
              })
              .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg.edit("✅ **| Write `ㅇ` To Confirm**").then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 90000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      if (collected.first().content === "ㅇ") {
                        message.channel.send(
                          `**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`
                        );

                        message.guild.members
                          .filter(m => m.presence.status === "online")
                          .forEach(m => {
                            var bc = new Discord.RichEmbed()
                              .setColor("RANDOM")
                              .setTitle(`:mega: 새로운 공지입니다.`)

                              .addField("📜메시지📜", `${msge}`)
                              .setThumbnail(
                                "https://a.top4top.net/p_1008gqyyd1.png"
                              )
                              .setFooter(
                                client.user.username,
                                client.user.avatarURL
                              );
                            m.send({ embed: bc });
                            //  m.send(`${m}`)
                          });
                      }
                    });
                  /*if(collected.first().content === 'no') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }*/
                });
              });
          });
      });

      onlineonly.on("collect", r => {
        let msge;
        message.channel
          .send(
            ":pencil: **| Please Write Now The Message To Send :pencil2: **"
          )
          .then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
              })
              .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg.edit("✅ **| Write `ㅇ` To Confirm**").then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 90000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      if (collected.first().content === "ㅇ") {
                        message.channel.send(
                          `**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`
                        );

                        message.guild.members
                          .filter(m => m.presence.status === "online")
                          .forEach(m => {
                            m.send(`${msge}`);
                            // m.send(`${m}`)
                          });
                      }
                      /*if(collected.first().content === 'no') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent T The Members :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`) 
                
    })}*/
                    });
                });
              });
          });
      });

      embedmsg.on("collect", r => {
        let msge;
        message.channel
          .send(
            ":pencil: **| Please Write Now The Message To Send :pencil2: **"
          )
          .then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
              })
              .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg.edit("✅ **| Write `ㅇ` To Confirm**").then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 90000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      if (collected.first().content === "ㅇ") {
                        message.channel.send(
                          `**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`
                        );

                        message.guild.members.forEach(m => {
                          var bc = new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setTitle(`:mega: 새로운 공지입니다.`)

                            .addField("📜메시지📜", `${msge}`)
                            .setThumbnail(
                              "https://a.top4top.net/p_1008gqyyd1.png"
                            )
                            .setFooter(
                              client.user.username,
                              client.user.avatarURL
                            );
                          m.send({ embed: bc });
                          //   m.send(`${m}`)
                        });
                      }
                    });
                  /*if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }*/
                });
              });
          });
      });

      normalmsg.on("collect", r => {
        let msge;
        message.channel
          .send(
            ":pencil: **| Please Write Now The Message To Send :pencil2: **"
          )
          .then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
              })
              .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg.edit("✅ **| Write `ㅇ` To Confirm**").then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 90000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      if (collected.first().content === "ㅇ") {
                        message.channel.send(
                          `**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`
                        );

                        message.guild.members.forEach(m => {
                          m.send(`${msge}`);
                        });
                      }
                      /*if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`) 
                 
     })}*/
                    });
                });
              });
          });
      });

      onlyrole.on("collect", r => {
        let msge;
        let role;
        message.channel
          .send(
            ":pencil: **| Please Write Now The Message To Send :pencil2: **"
          )
          .then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
              })

              .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg
                  .edit("✅ **| Now Please Write The Role Name**")
                  .then(msg => {
                    message.channel
                      .awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      })

                      .then(collected => {
                        collected.first().delete();
                        role = collected.first().content;
                        let rolecheak = message.guild.roles.find(
                          "name",
                          `${role}`
                        );
                        msg.edit("✅ **| Write `ㅇ` To Confirm**").then(msg => {
                          message.channel
                            .awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ["time"]
                            })
                            .then(collected => {
                              if (collected.first().content === "ㅇ") {
                                message.channel.send(
                                  `**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`
                                );

                                message.guild.members
                                  .filter(m => m.roles.get(rolecheak.id))
                                  .forEach(m => {
                                    m.send(`${msge}`);
                                  });
                              }
                              /*if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`) 
                 
     })}*/
                            });
                        });
                      });
                  });
              });
          });
      });

      embedonlyrole.on("collect", r => {
        let msge;
        let role;
        message.channel
          .send(
            ":pencil: **| Please Write Now The Message To Send :pencil2: **"
          )
          .then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ["time"]
              })

              .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg
                  .edit(":white_check_mark: | **Please Write The Role Name**")
                  .then(msg => {
                    message.channel
                      .awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      })

                      .then(collected => {
                        collected.first().delete();
                        role = collected.first().content;
                        let rolecheak = message.guild.roles.find(
                          "name",
                          `${role}`
                        );
                        msg.edit("✅ **| Write `ㅇ` To Confirm**").then(msg => {
                          message.channel
                            .awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ["time"]
                            })
                            .then(collected => {
                              if (collected.first().content === "ㅇ") {
                                message.channel.send(
                                  `**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`
                                );

                                message.guild.members
                                  .filter(m => m.roles.get(rolecheak.id))
                                  .forEach(m => {
                                    var bc = new Discord.RichEmbed()
                                      .setColor("RANDOM")
                                      .setTitle(`:mega: 새로운 공지입니다.`)

                                      .addField("📜메시지📜", `${msge}`)
                                      .setThumbnail(
                                        "https://a.top4top.net/p_1008gqyyd1.png"
                                      )
                                      .setFooter(
                                        client.user.username,
                                        client.user.avatarURL
                                      );
                                    m.send({ embed: bc });
                                  });
                              }
                              /*if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent To The Members :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}*/
                            });
                        });
                      });
                  });
              });
          });
      });
      cancel.on("collect", r => {
        let cancelembed = new Discord.RichEmbed().setTitle(
          "Successfully Canceled :x:"
        );
        message.channel.sendEmbed(cancelembed);
        embedmsg.stop();
        normalmsg.stop();
        onlyrole.stop();
        embedonlyrole.stop();
        embedonlineonly.stop();
        onlineonly.stop();
        cancel.stop();
      });
    });
  }
});

client.login(process.env.TOKEN);
