const name = 'Aktan'

// localStorage.setItem('user', JSON.stringify(user))

const newUser = localStorage.getItem('user')
console.log(JSON.parse(newUser))


localStorage.clear()