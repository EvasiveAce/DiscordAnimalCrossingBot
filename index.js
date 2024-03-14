const { Client, GatewayIntentBits, Guild } = require('discord.js');
require('dotenv/config');
var cron = require("cron");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () =>
{
    console.log('The bot is ready')
});

let dchannel = ""

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        dchannel = message.channel.id;
    }
});


let twelveAM = new cron.CronJob('00 00 00 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=nCjikfzAxnE");
});

let oneAM = new cron.CronJob('00 00 01 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=3zKqXMg28ko");
});

let twoAM = new cron.CronJob('00 00 02 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=GRQO-4hY7D4");
});

let threeAM = new cron.CronJob('00 00 03 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=IUocRahAMOU");
});

let fourAM = new cron.CronJob('00 00 04 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=u1t5_DjMrfY");
});

let fiveAM = new cron.CronJob('00 00 05 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=EcEdFgHjikM");
});

let sixAM = new cron.CronJob('00 00 06 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=12zcLNA3clo");
});

let sevenAM = new cron.CronJob('00 00 07 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=INf3NXheN50");
});

let eightAM = new cron.CronJob('00 00 08 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=QFDMo7uLiD0");
});

let nineAM = new cron.CronJob('00 00 09 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=STjSeTQJpkY");
});

let tenAM = new cron.CronJob('00 00 10 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=NtbSi3mTVUc");
});

let elevenAM = new cron.CronJob('00 00 11 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=6fvTpGXs288");
});

let twelvePM = new cron.CronJob('00 00 12 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=kaZmtVCkcYY");
});

let onePM = new cron.CronJob('00 00 13 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=Iar-NrBmwZ0");
});

let twoPM = new cron.CronJob('00 00 14 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=3AWQuELp8Q8");
});

let threePM = new cron.CronJob('00 00 15 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=AN6I-cxHxkM");
});

let fourPM = new cron.CronJob('00 00 16 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=weHizIW296E");
});

let fivePM = new cron.CronJob('00 00 17 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=khBwYuNGU6U");
});

let sixPM = new cron.CronJob('00 00 18 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=i9FhWgjRP2U");
});

let sevenPM = new cron.CronJob('00 00 19 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=QXl5BZK2lHs");
});

let eightPM = new cron.CronJob('00 00 20 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=Xsglvg3hK8g");
});

let ninePM = new cron.CronJob('00 00 21 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=9oLZgF8LAA8");
});

let tenPM = new cron.CronJob('00 00 22 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=-Zlfbpak0yU");
});

let elevenPM = new cron.CronJob('00 00 23 * * *', () => {
    let channel = client.channels.cache.get(dchannel);
    channel.send("https://www.youtube.com/watch?v=u-kvsJW-8G0");
});

twelveAM.start();
oneAM.start();
twoAM.start();
threeAM.start();
fourAM.start();
fiveAM.start();
sixAM.start();
sevenAM.start();
eightAM.start();
nineAM.start();
tenAM.start();
elevenAM.start();
twelvePM.start();
onePM.start();
twoPM.start();
threePM.start();
fourPM.start();
fivePM.start();
sixPM.start();
sevenPM.start();
eightPM.start();
ninePM.start();
tenPM.start();
elevenPM.start();


client.login(process.env.TOKEN);