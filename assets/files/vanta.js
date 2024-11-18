let vantaEffect = VANTA.BIRDS({
  el: "#canvas-container",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x111111,
  color1: 0x3b82f6,
  color2: 0xffffff,
  colorMode: "variance",
  birdSize: 1.50,
  wingSpan: 40.00,
  speedLimit: 5.00,
  separation: 100.00,
  alignment: 50.00,
  cohesion: 50.00,
  quantity: 3.00
});

// Animation to make birds fly away and fade out
setTimeout(() => {
  let startTime = Date.now();
  let flyDuration = 2000; // 2 second fly animation
  let fadeDuration = 1500; // 1.5 second fade animation
  let totalDuration = flyDuration + fadeDuration;
  
  // Create a style element for the fade animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  
  let animate = () => {
    let elapsed = Date.now() - startTime;
    let progress = Math.min(elapsed / totalDuration, 1);
    let flyProgress = Math.min(elapsed / flyDuration, 1);
    
    // First phase: fly away
    if (elapsed < flyDuration) {
      vantaEffect.setOptions({
        separation: 100 + (flyProgress * 900),
        cohesion: 50 * (1 - flyProgress),
        speedLimit: 5 + (flyProgress * 15),
      });
    }
    
    // Second phase: fade out
    if (elapsed >= flyDuration && elapsed <= totalDuration) {
      let fadeProgress = (elapsed - flyDuration) / fadeDuration;
      document.getElementById('canvas-container').style.opacity = 1 - fadeProgress;
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Cleanup after fade
      setTimeout(() => {
        vantaEffect.destroy();
        document.getElementById('canvas-container').style.opacity = 1;
      }, 100);
    }
  };
  
  animate();
}, 3000); // Start flying away after 3 seconds 