radio.onReceivedValue(function (name, value) {
    // Command received, reset counter
    counter = 0
    // Drive commands
    if (name == "drive") {
        if (value == 0) {
            bot.stop()
        } else if (value == 1) {
            bot.drive(bot.BotDirection.Forward, 0)
        } else if (value == 2) {
            bot.drive(bot.BotDirection.Backward, 0)
        } else if (value == 3) {
            bot.drive(bot.BotDirection.Left, 0)
        } else if (value == 4) {
            bot.drive(bot.BotDirection.Right, 0)
        } else {
            bot.stop()
        }
    }
})
let counter = 0
bot.stop()
counter = 0
radio.setGroup(1)

// Stop bot if no remote control command has been received for 500 ms
loops.everyInterval(100, function () {
    counter += 1
    if (counter > 5) {
        bot.stop()
    }
})
