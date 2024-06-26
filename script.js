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

function draw() {
    body.innerHTML = '';
    body.style.cssText = 'margin: 0; overflow: hidden; background: black; color: #0F0; font-family: monospace; white-space: nowrap; line-height: 1.2em; font-size: 16px; position: relative;';
    
    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const textNode = createTextNode(text);
        textNode.style.position = 'absolute';
        textNode.style.top = `${drops[i] * fontSize}px`;
        textNode.style.left = `${i * fontSize}px`;

        // Randomly make some characters shine
        if (Math.random() > 0.975) {
            textNode.style.color = 'white';
            textNode.style.textShadow = '0 0 5px #FFF, 0 0 10px #FFF, 0 0 20px #FFF, 0 0 40px #0F0, 0 0 70px #0F0, 0 0 80px #0F0, 0 0 100px #0F0, 0 0 150px #0F0';
        }

        body.appendChild(textNode);

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 25);
