const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < 190; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = `${Math.random() * 3}px`;
      star.style.animationDelay = `-${Math.random() * 3}s`; 
      starsContainer.appendChild(star);
    }
