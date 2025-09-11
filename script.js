// --- Particle Cursor Effect ---
document.addEventListener('mousemove', (e) => {
    let particle = document.createElement('span');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    
    let randomSize = Math.random() * 8 + 2; // 2px to 10px
    particle.style.width = randomSize + 'px';
    particle.style.height = randomSize + 'px';

    // Create a random trajectory
    let randomValue = Math.random() * 2 * Math.PI;
    let randomDistance = Math.random() * 30 + 20;

    particle.style.setProperty('--x', Math.cos(randomValue) * randomDistance + 'px');
    particle.style.setProperty('--y', Math.sin(randomValue) * randomDistance + 'px');

    setTimeout(() => {
        particle.remove();
    }, 800);
});