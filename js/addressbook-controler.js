'use strict'

function init() {
  getContacts(renderCards)
}

function renderCards(res) {
  var AddressBook = res
  console.log(AddressBook)
  const strHtml = AddressBook.map(
    //replace with dynamic data
    (contact) => `<article> <div class="card mb-3" style="max-width: 480px;">
      <div class="row">
        <div class="col-md-4">
          <img src="https://robohash.org/{${contact.fname}}?set=set1" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 p-0">
          <div class="card-body">
            <h5 class="card-title">${contact.fname}, ${contact.lname}</h5>
            <p class="contact-details">Phone: ${contact.tel}</p>
            <p class="contact-details" m-0>City: ${contact.city}</p>
            <p class="contact-details">State: ${contact.state}</p>
            <p class="contact-details">Address: ${contact.address}</p>
          </div>
        </div>
      </div>
    </div>
    </article>`
  )
  document.querySelector('.cards-container').innerHTML = strHtml.join('')
}
