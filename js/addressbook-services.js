'use strict'

const CONTACT_STORAGE_KEY = 'CONTACTS'

function getContacts(cb) {
  const XHR = new XMLHttpRequest()
  const URL = `http://www.filltext.com/?rows=21&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true`

  XHR.onreadystatechange = () => {
    if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
      let res =
        loadFromStorage(CONTACT_STORAGE_KEY) || JSON.parse(XHR.responseText)
      saveToStorage(CONTACT_STORAGE_KEY, res)
      cb(res)
    }
  }

  XHR.open('GET', URL)
  XHR.send()
}
