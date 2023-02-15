'use strict'
const gReactions = {
 yes: 'https://api.chucknorris.io/jokes/random',
 no: 'https://dog.ceo/api/breeds/image/random'
}

function ask(cb) {
    $.get('https://yesno.wtf/api', cb)
  }
  
  function getReaction(answer,cb){
    $.get(gReactions[answer], cb)
  }