const steps = require('./steps')

const handleQuiz = (step) => {
  const nextStep = steps.filter(question => question.step === step)[0];
  const content = nextStep.content;
  return content;
}

module.exports = handleQuiz;
