const heart = document.getElementById('heart');
const container = document.getElementById('chart-container');
const svgCanvas = document.getElementById('connections');
const nodes = document.querySelectorAll('.node');

const drawer = document.getElementById('log-drawer');
const logTitle = document.getElementById('log-title');
const logHistory = document.getElementById('log-history');

const nodeDirections = [
{ x: 1.2,  y: 0.8 },
{ x: -0.9, y: 1.4 },
{ x: -1.5, y: -0.7 },
{ x: 0.8,  y: -1.2 }
];

const nodeLogs = {
    "Myself": [
        { text: "I look into the mirror and see myself from all those years ago.<br><br>The idea of it all still makes me sick, but I suppose change does not come overnight." },
        { text: "It has been a year since I have confronted my wrongs, but it doesn't get any better past a certain point. <br><br>I'll keep going just for her." }
    ],
    "Lottie": [
        { text: "A person who enjoys positive words sprouted from the depths of their hearts." },
        { text: "A friend? Something of the sort.<br><br>I personally am not too fond of her because of her friendliness, but I figured I should mirror her to see where it goes. This kind of friendliness is the kind that can make or break people.<br><br>A part of me still wants to believe she has no ill intent." },

    ],
    "Jie": [
        { text: "Reminds me of Jiang Min, looks-wise at least. Definitely not personality-wise." },
        { text: "There is something odd that happens whenever I am around her. I want to experiment with this feeling while it exists in the moment. <br><br>I suppose I can simply pose it as 'wanting to get closer to her'." },
        { text: "The feeling is still there, unmoving like a stain stuck on your favorite shirt. I am still unsure how to make of it, so I shall continue.<br><br> The romantic context of my pursuit that haunts the narrative shouldn't exist anymore, I suppose. It was a fluke." }
    ],
    "Bonzo": [
        { text: "A happy-go-lucky trainer who enjoys battling." },
        { text: "Sometimes I wonder if he would fit in nicely with us at Shaper. He reminds me of some of my former colleagues, though he does say he doesn't really care much about academies and such. <br><br>Sometimes whenever I look at him, a part of my being is filled with <b>envy</b>." }
    ],
    "Omar": [
        { text: "Not much I can say, we went to the same academy together." }
    ]
};

function drawChains() {
svgCanvas.innerHTML = '';
const heartRect = heart.getBoundingClientRect();
const heartCenter = {
    x: heartRect.left + heartRect.width / 2,
    y: heartRect.top + heartRect.height / 2
};

nodes.forEach(node => {
    const nodeRect = node.getBoundingClientRect();
    const nodeCenter = {
    x: nodeRect.left + nodeRect.width / 2,
    y: nodeRect.top + nodeRect.height / 2
    };

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", heartCenter.x);
    line.setAttribute("y1", heartCenter.y);
    line.setAttribute("x2", nodeCenter.x);
    line.setAttribute("y2", nodeCenter.y);
    line.setAttribute("class", "chain-line");
    svgCanvas.appendChild(line);
});
}

function renderLogs(title) {
logHistory.innerHTML = '';
const entries = nodeLogs[title] || [];

if (entries.length === 0) {
    logHistory.innerHTML = '<div class="log-entry"><div class="log-text">No logs recorded yet.</div></div>';
    return;
}

entries.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'log-entry';
    item.innerHTML = `<div class="log-text">${entry.text}</div>`;
    logHistory.appendChild(item);
});

logHistory.scrollTop = 0;
}

document.addEventListener('mousemove', (e) => {
const mouseX = (e.clientX - window.innerWidth / 2) / 25;
const mouseY = (e.clientY - window.innerHeight / 2) / 25;

nodes.forEach((node, index) => {
    const dir = nodeDirections[index % nodeDirections.length];
    
    const moveX = mouseX * dir.x;
    const moveY = mouseY * dir.y;

    node.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
});

drawChains();
});

heart.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const activeTitle = heart.getAttribute('data-title');
    const newBg = heart.getAttribute('data-bg');

    document.body.style.backgroundColor = newBg;
    logTitle.textContent = activeTitle;
    renderLogs(activeTitle);
    drawer.classList.add('active');
});

nodes.forEach(node => {
node.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const activeTitle = node.getAttribute('data-title');
    const newBg = node.getAttribute('data-bg');

    document.body.style.backgroundColor = newBg;
    logTitle.textContent = activeTitle;
    renderLogs(activeTitle);
    drawer.classList.add('active');
});
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.node') && !e.target.closest('#heart') && !e.target.closest('.log-drawer')) {
    drawer.classList.remove('active');
    document.body.style.backgroundColor = '#121212';
    }
});

drawChains();
window.addEventListener('resize', drawChains);

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});