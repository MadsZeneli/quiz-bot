const handleQuiz = require('./handleQuiz')

const handlePostback = (payload, reply, actions) => {
	const next = payload.postback.payload;
	const response = handleQuiz(next);
	reply(response, (err, info) => {
		if(err) console.log(err);
		if(next === 'DONE') {
			reply(handleQuiz('SHARE'), (err, info) => {})
		}
	})
}

module.exports = handlePostback;
