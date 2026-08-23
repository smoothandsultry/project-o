const rainContainer = document.getElementById('rain');

    for (let i = 0; i < 150; i++) {
        const depth = Math.floor(Math.random() * 1000);
        const left = Math.floor(Math.random() * 100) + '%';
        const opacity = (1001 - depth) / 1000;
        const dropHeight = Math.floor(Math.random() * 50) + 30 + 'px';
        const animDuration = Math.floor(Math.random() * 200) + 1000 + 'ms';
        const animDelay = (Math.floor(Math.random() * 2000) * -1) + 'ms';

        const line = document.createElement('div');
        line.className = 'rain_line';
        line.style.left = left;
        line.style.transform = `translateZ(${-depth}px)`;
        line.style.opacity = opacity;

        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.width = '100%';
        drop.style.height = dropHeight;
        drop.style.background = 'linear-gradient(to bottom, rgba(200,200,200,0) 0%, rgba(200,200,200,1) 70%, rgba(200,200,200,0) 100%)';
        drop.style.animation = `drop ${animDuration} ${animDelay} linear infinite`;

        line.appendChild(drop);
        rainContainer.appendChild(line);
    }