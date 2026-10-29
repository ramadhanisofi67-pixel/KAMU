// script.js – navigation, page indicator, and background music handling

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const indicator = document.getElementById('pageIndicator');
  const total = slides.length;
  let current = 0;

  const showSlide = (index) => {
    if (index < 0 || index >= total) return;
    slides[current].setAttribute('hidden', true);
    slides[index].removeAttribute('hidden');
    current = index;
    indicator.textContent = `${index + 1}/${total}`;
    // focus first interactive element for accessibility
    const firstBtn = slides[index].querySelector('button');
    if (firstBtn) firstBtn.focus();
  };

  // Click navigation
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-target]');
    if (!btn) return;
    const target = parseInt(btn.getAttribute('data-target'), 10) - 1;
    if (!isNaN(target)) showSlide(target);
  });

  // Keyboard navigation (arrow keys)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      if (current < total - 1) showSlide(current + 1);
    } else if (e.key === 'ArrowLeft') {
      if (current > 0) showSlide(current - 1);
    }
  });

  // Audio player setup
  const audio = document.getElementById('bgAudio');
  const playBtn = document.getElementById('playPause');
  const status = document.getElementById('status');

  const updateStatus = () => {
    status.textContent = audio.paused ? 'Paused' : 'Playing';
    playBtn.textContent = audio.paused ? 'Play ♡' : 'Pause ♡';
  };

  // Try autoplay – browsers may block until user interaction.
  const tryAutoplay = async () => {
    try {
      await audio.play();
    } catch (_) {
      // Autoplay blocked – keep button for manual start.
    }
    updateStatus();
  };

  tryAutoplay();

  playBtn.addEventListener('click', async () => {
    if (audio.paused) {
      try { await audio.play(); } catch (e) { console.error('Play failed', e); }
    } else {
      audio.pause();
    }
    updateStatus();
  });

  // Loop music when it ends.
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
  });

  // Graceful handling if audio file missing.
  audio.addEventListener('error', () => {
    status.textContent = 'Audio unavailable';
    playBtn.disabled = true;
  });
});
