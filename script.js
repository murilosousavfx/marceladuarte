document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.08)';
    btn.style.transition = 'transform 0.2s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.08)';
    btn.style.transition = 'transform 0.2s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Efeito de aumentar nos botões
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.08)';
    btn.style.transition = 'transform 0.2s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Efeito de aumentar nos cards e no card de apresentação
document.querySelectorAll('.card, .card-apresentação').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04)';
    card.style.transition = 'transform 0.2s';
    card.style.zIndex = '2';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.zIndex = '';
  });
});

// Efeito de aumentar nos botões (mouse e touch)
document.querySelectorAll('.btn').forEach(btn => {
  // Mouse
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.08)';
    btn.style.transition = 'transform 0.2s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
  // Touch
  btn.addEventListener('touchstart', () => {
    btn.style.transform = 'scale(1.08)';
    btn.style.transition = 'transform 0.2s';
  });
  btn.addEventListener('touchend', () => {
    btn.style.transform = 'scale(1)';
  });
});

