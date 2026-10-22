/**
 * What Is Application Architecture? — Presentation Logic
 * Pure Image-First Presentation with Smooth Left/Right Slide Moving.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- State ---
  let currentSlide = 0;
  const totalSlides = 2;
  let soundEnabled = false;

  // Synthesized Web Audio
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'slide') {
        // Soft slide swoosh
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(560, now + 0.14);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === 'click') {
        // Crisp click
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(580, now);
        osc.frequency.exponentialRampToValueAtTime(340, now + 0.05);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  // --- DOM Elements ---
  const sliderTrack = document.getElementById('slider-track');
  const navTabs = [document.getElementById('tab-slide-0'), document.getElementById('tab-slide-1')];
  const dotBtns = document.querySelectorAll('.dot-btn');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const currentSlideDisplay = document.getElementById('current-slide-num');
  const btnSound = document.getElementById('btn-sound');
  const btnFullscreen = document.getElementById('btn-fullscreen');

  // --- Horizontal Slide Transition ---
  function goToSlide(index, playAudio = true) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;

    // Slide track horizontal move (left and right)
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}vw)`;

    // Update Counter
    if (currentSlideDisplay) {
      currentSlideDisplay.textContent = (currentSlide + 1).toString().padStart(2, '0');
    }

    // Update Tabs
    navTabs.forEach((tab, idx) => {
      if (tab) {
        tab.classList.toggle('active', idx === currentSlide);
      }
    });

    // Update Dots
    dotBtns.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });

    // Update Next/Prev state
    btnPrev.disabled = (currentSlide === 0);
    if (currentSlide === totalSlides - 1) {
      btnNext.innerHTML = `<span>Completed</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else {
      btnNext.innerHTML = `<span>Next</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    }

    if (playAudio) {
      playSound('slide');
    }
  }

  function nextSlide() {
    initAudio();
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    initAudio();
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  // --- Event Listeners for Nav ---
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);

  navTabs.forEach((tab, idx) => {
    if (tab) {
      tab.addEventListener('click', () => {
        initAudio();
        goToSlide(idx);
      });
    }
  });

  dotBtns.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      initAudio();
      goToSlide(idx);
    });
  });

  // --- Sound Toggle ---
  btnSound.addEventListener('click', () => {
    initAudio();
    soundEnabled = !soundEnabled;
    const iconOn = btnSound.querySelector('.sound-icon-on');
    const iconOff = btnSound.querySelector('.sound-icon-off');
    if (soundEnabled) {
      iconOn.classList.remove('hide');
      iconOff.classList.add('hide');
      btnSound.classList.add('active');
      playSound('click');
    } else {
      iconOn.classList.add('hide');
      iconOff.classList.remove('hide');
      btnSound.classList.remove('active');
    }
  });

  // --- Fullscreen Toggle ---
  btnFullscreen.addEventListener('click', () => {
    initAudio();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  // --- Keyboard Shortcuts Navigation ---
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ': // Spacebar
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case '1':
        initAudio();
        goToSlide(0);
        break;
      case '2':
        initAudio();
        goToSlide(1);
        break;
      case 'f':
      case 'F':
        btnFullscreen.click();
        break;
      case 'm':
      case 'M':
        btnSound.click();
        break;
    }
  });

  // --- Touch / Swipe Support for Trackpad & Mobile ---
  let touchStartX = 0;
  let touchEndX = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // --- Initial Setup ---
  goToSlide(0, false);

});
