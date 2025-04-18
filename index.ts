import * as MineFlayer from 'mineflayer';

const options = {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    version: process.env.VERSION
}

const bot = MineFlayer.createBot({
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    version: process.env.VERSION
});

bot.once('spawn', () => {
    bot.chat('Greetings World!');
});

bot.on('chat', (username, message) => {
    if (username == bot.username) return;

    const command = message.split('!')[0];


    if (command && command == "Hello World")
    {
        console.log('Code is working');
    }

});

bot.on('kicked', (reason, loggedIn) => {
    console.log(`The bot has been kicked because of ${reason}, logged in: ${loggedIn}`);
})

bot.on('error', (err) => {
    console.log(options);
    console.log('Something went wrong: ', err);
});