

const phoneBook = [
    {name: 'Trent', number: '123456789'},
    {name: 'Darwin', number:'100000000'},
]

function renderPhonebook() {

    let output = '<ol>'
    phoneBook.forEach((contact) => {
        output += `<li>${contact.name} - ${contact.number}</li>`
    })
    output += '</ol';

    document.body.innerHTML = output;
}

function saveContact(contact) {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            reject(new Error('failed to save contact'));
            
    }, 5000);
});

}

const newContact= {
    name: 'Maggie',
    number: '2345678996',
};

renderPhonebook();

const promise = saveContact(newContact);

promise.then((response) => {

    //handle success
    phoneBook.push(response);
    renderPhonebook();

}).catch((err) => {

    //handle error
    alert(err.message);

})