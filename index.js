var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "HOW DO I CLOSE IT",
assets : {
large_image : "help_large",
large_text : "HOW DO I CLOSE TERRARIA HELP" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
})
})
client.login({ clientId : "817885477884526632" }).catch(console.error);
