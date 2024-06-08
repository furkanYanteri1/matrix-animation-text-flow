const body = document.body;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const fontSize = 16;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function createTextNode(letter) {
    const span = document.createElement('span');
    span.textContent = letter;
    return span;
}

// TODO, create the drawer using createTextNode
