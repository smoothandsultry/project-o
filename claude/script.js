const container = document.getElementById("container");
const image = document.getElementById("image");
const on = document.getElementById('on');
const off = document.getElementById('off');
let lightOn = false;

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maskPos = `${x - 150}px ${y - 150}px`;
    
    image.style.maskPosition = maskPos;
    image.style.maskPosition = maskPos;
});

// container.addEventListener('click', () => {
//     lightOn =! lightOn;

//     image.style.opacity = lightOn ? '1':'0';
//     container.classList.toggle('active', lightOn);

//     const lightSound = lightOn ? on : off;

//     lightSound.currentTime = 0;
//     lightSound.play();
// });

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});