const button = document.getElementById('button');
const toast = document.getElementById('toasts');

const message = [
    'message One',
    'message two',
    'message Three',
    'message Four',
];

const types = [
    'info',
    'success',
    'error'
];

// button.addEventListener('click', () => createNotification('This is invalid data', getRandomTypes() ));
button.addEventListener('click', () => createNotification() );

function createNotification (message = null, type = null) {
    const notif =  document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomTypes());
    notif.innerText = message ? message : getRandomMessage();

    toast.appendChild(notif);

    setTimeout( () => {
        notif.remove()
    }, 3000);
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)];
}

function getRandomTypes () {
    return types[ Math.floor(Math.random() * types.length )];
}