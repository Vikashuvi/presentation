/**
 * Visual Architecture Presentation
 * Controller for ian-xiaohei-scenes Style Presentation
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentScene = 0;
  const totalScenes = 3;
  let isAnimatingFlow = false;
  let flowTimeouts = [];

  // DOM Elements
  const scenes = document.querySelectorAll('.scene-card');
  const indicatorDots = document.querySelectorAll('.indicator-dot');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnRestart = document.getElementById('btn-restart');
  const counterCurrent = document.getElementById('counter-current');
  const btnFullscreen = document.getElementById('btn-fullscreen');

  // Scene 1 Elements
  const btnTriggerScene1 = document.getElementById('btn-trigger-scene1');
  const badgePacket = document.getElementById('badge-request-packet');

  // Scene 2 Elements
  const btnRunComparison = document.getElementById('btn-run-comparison');
  const flowStatusText = document.getElementById('flow-status-text');

  // Server-based step elements
  const sbSteps = {
    user: document.getElementById('sb-step-user'),
    packet1: document.getElementById('packet-sb-1'),
    frontend: document.getElementById('sb-step-frontend'),
    packet2: document.getElementById('packet-sb-2'),
    server: document.getElementById('sb-step-server'),
    packet3: document.getElementById('packet-sb-3'),
    db: document.getElementById('sb-step-db')
  };

  // Serverless step elements
  const slSteps = {
    user: document.getElementById('sl-step-user'),
    packet1: document.getElementById('packet-sl-1'),
    frontend: document.getElementById('sl-step-frontend'),
    packet2: document.getElementById('packet-sl-2'),
    gateway: document.getElementById('sl-step-gateway'),
    packet3: document.getElementById('packet-sl-3'),
    func: document.getElementById('sl-step-function'),
    packet4: document.getElementById('packet-sl-4'),
    db: document.getElementById('sl-step-db')
  };

  /**
   * Navigation to a specific scene index
   */
  function goToScene(index) {
    if (index < 0 || index >= totalScenes) return;

    clearAllFlowTimeouts();
    currentScene = index;

    // Update active scene cards
    scenes.forEach((scene, i) => {
      scene.classList.toggle('active', i === currentScene);
    });

    // Update indicator dots
    indicatorDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentScene);
    });

    // Update counter
    counterCurrent.textContent = currentScene + 1;

    // Update dock buttons
    btnPrev.disabled = currentScene === 0;
    btnNext.disabled = currentScene === totalScenes - 1;

    // Slide-specific triggers
    if (currentScene === 1) {
      resetScene2Visuals();
      const autoTimer = setTimeout(() => {
        runComparisonSimulation();
      }, 700);
      flowTimeouts.push(autoTimer);
    }
  }

  function nextScene() {
    if (currentScene < totalScenes - 1) {
      goToScene(currentScene + 1);
    }
  }

  function prevScene() {
    if (currentScene > 0) {
      goToScene(currentScene - 1);
    }
  }

  // Event Listeners for Navigation
  btnPrev.addEventListener('click', prevScene);
  btnNext.addEventListener('click', nextScene);
  btnRestart.addEventListener('click', () => goToScene(0));

  indicatorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetScene = parseInt(dot.getAttribute('data-scene'), 10);
      goToScene(targetScene);
    });
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ': // Spacebar
        e.preventDefault();
        nextScene();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prevScene();
        break;
      case 'Home':
        e.preventDefault();
        goToScene(0);
        break;
      case 'End':
        e.preventDefault();
        goToScene(totalScenes - 1);
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
    }
  });

  // Fullscreen support
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  btnFullscreen.addEventListener('click', toggleFullscreen);

  // =========================================================================
  // SCENE 1 INTERACTION: User Tap to Infrastructure Flow
  // =========================================================================

  function triggerScene1Tap() {
    if (isAnimatingFlow) return;
    isAnimatingFlow = true;

    if (btnTriggerScene1) {
      btnTriggerScene1.style.transform = 'translateY(1px) scale(0.96)';
      setTimeout(() => {
        btnTriggerScene1.style.transform = '';
      }, 150);
    }

    // Pulse the middle request badge
    if (badgePacket) {
      badgePacket.style.transform = 'scale(1.15) translateY(-4px)';
      badgePacket.style.borderColor = 'var(--blue-primary)';
      badgePacket.style.boxShadow = '0 0 12px rgba(37, 99, 235, 0.4)';
    }

    const t1 = setTimeout(() => {
      if (badgePacket) {
        badgePacket.style.transform = '';
        badgePacket.style.borderColor = '';
        badgePacket.style.boxShadow = '';
      }
      isAnimatingFlow = false;
    }, 1200);

    flowTimeouts.push(t1);
  }

  if (btnTriggerScene1) {
    btnTriggerScene1.addEventListener('click', triggerScene1Tap);
  }

  // =========================================================================
  // SCENE 2 INTERACTION: Server-based vs. Serverless Comparison
  // =========================================================================

  function clearAllFlowTimeouts() {
    flowTimeouts.forEach(t => clearTimeout(t));
    flowTimeouts = [];
    isAnimatingFlow = false;
  }

  function resetScene2Visuals() {
    clearAllFlowTimeouts();

    if (flowStatusText) flowStatusText.textContent = 'Click to simulate request flows';

    // Clear server-based elements
    Object.values(sbSteps).forEach(el => {
      if (el) {
        el.classList.remove('active');
        el.classList.remove('animating');
      }
    });

    // Clear serverless elements
    Object.values(slSteps).forEach(el => {
      if (el) {
        el.classList.remove('active');
        el.classList.remove('animating');
      }
    });
  }

  function runComparisonSimulation() {
    if (isAnimatingFlow) return;
    isAnimatingFlow = true;
    resetScene2Visuals();
    isAnimatingFlow = true;

    if (flowStatusText) flowStatusText.textContent = '1. User action sends requests in parallel...';

    // Step 1: Users trigger
    if (sbSteps.user) sbSteps.user.classList.add('active');
    if (slSteps.user) slSteps.user.classList.add('active');

    // Stage 1 -> 2: Request packet travels to Frontends
    const t1 = setTimeout(() => {
      if (sbSteps.packet1) sbSteps.packet1.classList.add('animating');
      if (slSteps.packet1) slSteps.packet1.classList.add('animating');
    }, 200);

    // Step 2: Frontends receive request
    const t2 = setTimeout(() => {
      if (sbSteps.user) sbSteps.user.classList.remove('active');
      if (slSteps.user) slSteps.user.classList.remove('active');
      if (sbSteps.frontend) sbSteps.frontend.classList.add('active');
      if (slSteps.frontend) slSteps.frontend.classList.add('active');
      if (flowStatusText) flowStatusText.textContent = '2. Frontend dispatches request to backend architecture...';
    }, 700);

    // Stage 2 -> 3: Packets leave Frontends
    const t3 = setTimeout(() => {
      if (sbSteps.packet2) sbSteps.packet2.classList.add('animating');
      if (slSteps.packet2) slSteps.packet2.classList.add('animating');
    }, 950);

    // Step 3: Server-based reaches Server; Serverless reaches API Gateway
    const t4 = setTimeout(() => {
      if (sbSteps.frontend) sbSteps.frontend.classList.remove('active');
      if (slSteps.frontend) slSteps.frontend.classList.remove('active');
      
      if (sbSteps.server) sbSteps.server.classList.add('active');
      if (slSteps.gateway) slSteps.gateway.classList.add('active');

      if (flowStatusText) {
        flowStatusText.textContent = '3. Server-based hits active server; Serverless routes through API Gateway...';
      }
    }, 1450);

    // Stage 3 -> 4:
    // Server queries Database / Gateway triggers Cloud Function
    const t5 = setTimeout(() => {
      if (sbSteps.packet3) sbSteps.packet3.classList.add('animating');
      if (slSteps.packet3) slSteps.packet3.classList.add('animating');
    }, 1900);

    // Step 4:
    // Server reaches DB; Cloud Function awakens ⚡ on-demand
    const t6 = setTimeout(() => {
      if (slSteps.gateway) slSteps.gateway.classList.remove('active');
      if (slSteps.func) slSteps.func.classList.add('active');
      if (sbSteps.db) sbSteps.db.classList.add('active');

      if (flowStatusText) {
        flowStatusText.textContent = '4. Serverless spins up Cloud Function; Server-based queries Database...';
      }
    }, 2400);

    // Serverless Cloud Function queries Database
    const t7 = setTimeout(() => {
      if (slSteps.packet4) slSteps.packet4.classList.add('animating');
    }, 2900);

    // Step 5: Both at Database / Complete
    const t8 = setTimeout(() => {
      if (slSteps.db) slSteps.db.classList.add('active');
      if (flowStatusText) {
        flowStatusText.textContent = '5. Requests fulfilled! Serverless function winds down.';
      }
    }, 3400);

    // Cooldown and finish
    const t9 = setTimeout(() => {
      if (sbSteps.server) sbSteps.server.classList.remove('active');
      if (sbSteps.db) sbSteps.db.classList.remove('active');
      if (slSteps.func) slSteps.func.classList.remove('active');
      if (slSteps.db) slSteps.db.classList.remove('active');

      if (flowStatusText) {
        flowStatusText.textContent = 'Comparison complete. Ready to run again.';
      }
      isAnimatingFlow = false;
    }, 4500);

    flowTimeouts.push(t1, t2, t3, t4, t5, t6, t7, t8, t9);
  }

  if (btnRunComparison) {
    btnRunComparison.addEventListener('click', runComparisonSimulation);
  }

  // Initialize Scene 0
  goToScene(0);
});
