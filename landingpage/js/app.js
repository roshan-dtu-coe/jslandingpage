const time = document.getElementById('time');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const greeting = document.getElementById('greeting');

function showTime() {
    let today = new Date(),
        hours = today.getHours(),
        mins = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hours >= 12 ? 'AM' : 'PM';

    hours = hours % 12 || 12;

    time.innerHTML = `${hours}<span>:</span>${addZero(mins)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {

    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}




function setBackground() {
    let today = new Date();

    let hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')"
        greeting.textContent = 'Good Morning,';
    } else if (hour > 12 && hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')"
        greeting.textContent = 'Good Afternoon,';
    } else {
        document.body.style.backgroundImage = "url('../img/night.jpg')"
        greeting.textContent = 'Good Evening,';
        document.body.style.color = 'white';
    }
}
showTime();
setBackground();
getName();
getfocus();

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function getfocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[What is your focus for today ?]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListner('keypress', setName);
focus.addEventListner('blur', setName);