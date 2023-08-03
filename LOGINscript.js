var Username = document.getElementById('Username')
var Password = document.getElementById('Password')
var form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    
    if(Username.value === ''||Username.value == null) {
        alert('Name is required')
        e.preventDefault()
    }
    if(Password.value === ''||Password.value == null) {
        alert('Password is required')
        e.preventDefault()
    }
    
    
})