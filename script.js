document.addEventListener('DOMContentLoaded', function() {
    // Mouse cursor trail effect
    document.addEventListener('mousemove', function(e) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        document.body.removeChild(trail);
      }, 1000);
    });
    
    
    const container = document.querySelector('.container');
    document.addEventListener('mousemove', function(e) {
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;
      
      container.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    });
    
    document.addEventListener('mouseleave', function() {
      container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
  });