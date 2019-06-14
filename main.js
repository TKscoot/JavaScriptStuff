const Discord = require('discord.js');
const client = new Discord.Client();


var sys = require('util')
var exec = require('child_process').exec;
var child;
// executes `pwd`

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

    child = exec("curl -Ls -o /dev/null -w %{url_effective} https://kack.website/", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    //client.channels.get(`channelID`).send(stdout);
    const channel = client.channels.find('name', 'botspam');
    channel.send(stdout);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === '!webm') {
    child = exec("curl -Ls -o /dev/null -w %{url_effective} https://kack.website/", function (error, stdout, stderr) {
    msg.reply(stdout);
  });
  }
});

client.login('NDg3NjAxMDQwNDI2Nzk1MDA4.DnQDKg.X95P_H9tmlN-UQdQD2IdI-pR34M');
