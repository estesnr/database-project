const checkIn = document.querySelector('#checkInButton')

const data = {
    CalSticker = document.querySelector('#checkInCalStick'),
    Loc = HomeBase,
    Date = document.querySelector('#checkInDate')
}

checkIn.addEventListener('click', _ => {
    fetch('/instrus', {
        method: 'put',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify (data)

    })
})