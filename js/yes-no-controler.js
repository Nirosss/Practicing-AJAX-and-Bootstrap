function onInit() {
  document
    .querySelector('[type=search]')
    .addEventListener('input', onGetQuestion)
}

function onGetQuestion(ev) {
  const question = ev.target.value
  if (question.length > 3 && question.endsWith(`?`)) {
    $('.question-input').attr('hidden', true)
    ask(renderAnswer)
    showLoader()
  }
}

function renderAnswer(res) {
  $('.answer h3').text(res.answer)
  document.querySelector('.answer img').src = res.image
}

function showAnswer() {
  const elAnswer = $('.answer h3').text()
  console.log(elAnswer)
  $('.loader').attr('hidden', true)
  $('.answer').attr('hidden', false)
  if (elAnswer === 'yes') {
    getReaction('yes', showReaction)
  } else getReaction('no', showReaction)
}

function showLoader() {
  $('.question-input').attr('hidden', true)
  $('.loader').attr('hidden', false)
}

function showReaction(res) {
  res.value
    ? (document.querySelector('.reaction h3').innerText = res.value)
    : (document.querySelector('.reaction img').src = res.message)
}
