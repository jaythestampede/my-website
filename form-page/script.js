var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault() //prevents default form from autosubmitting

    var username = document.getElementById('username').value

    console.log(username)

    var password = document.getElementById('password').value

    console.log(password)

})