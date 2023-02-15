'use strict'

function loadFromStorage(key) {
  const res = localStorage.getItem(key)
  return JSON.parse(res)
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}
