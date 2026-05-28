// ── Custom cursor ──
const cursor = document.querySelector('.cursor');
if (cursor) {
  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    cursor.style.left = curX + 'px';
    cursor.style.top = curY + 'px';
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  document.querySelectorAll('a, button, .work-card, .hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.js-scroll-reveal').forEach(el => observer.observe(el));

// ── Parallax on hero text ──
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroTitle.style.transform = `translateY(${y * 0.25}px)`;
    heroTitle.style.opacity = 1 - y * 0.002;
  }, { passive: true });
}

// ── Nav background on scroll ──
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.mixBlendMode = 'normal';
      nav.style.background = 'rgba(255,255,255,0.95)';
      nav.style.backdropFilter = 'blur(12px)';
      nav.style.borderBottom = '0.5px solid #e0e0de';
      nav.querySelectorAll('a').forEach(a => a.style.color = '#0a0a0a');
    } else {
      nav.style.mixBlendMode = 'difference';
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.borderBottom = 'none';
      nav.querySelectorAll('a').forEach(a => a.style.color = '');
    }
  }, { passive: true });
}
