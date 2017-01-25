const responses = require('./responses')

const handleQuiz = require('./handleQuiz')

const getResponse = (array) => responses[array][Math.floor(Math.random()*responses[array].length)]

const inArray = (message, keywords) => {
	var length = keywords.length;
	for(var i = 0; i < length; i++) {
		if(message.search(keywords[i].toLowerCase()) > -1)
		return true;
	}
	return false;
}

const handleMessage = (bot, payload, reply, actions) => {
	let text = payload.message.text
	let response;

	bot.getProfile(payload.sender.id, (err, profile) => {
		if (err) throw err
		if (text.toLowerCase() === 'kweez') {
			response = handleQuiz('1')
		} else if(inArray(text.toLowerCase(), responses['greetings'])) {
			response = {
				"text": `${getResponse('greetings')}, ${profile.first_name}.`
			}
		} else {
			response = {
				"text": getResponse('random')
			}
		}
		reply(response, (err) => {
			if (err) console.log(err)
		})
	})
}

module.exports = handleMessage;
