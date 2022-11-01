const cron = require("node-cron");
const needle = require("needle");
let counter = 0;

console.log("Starting to curl => " + process.argv[2]);
cron.schedule("*/10 * * * * *", () => {
    needle.get(process.argv[2], function(err, response){
        console.log("Curled for the " + ++counter + "th time!");
    });
});