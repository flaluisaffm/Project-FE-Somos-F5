const tooltip = document.querySelector('.tooltip');
const tooltipText = document.querySelector('.tooltip-text');
const message = document.querySelector('.tooltip-click');

tooltip.addEventListener('mouseenter', () => {
  tooltipText.style.display = 'block';
});

tooltip.addEventListener('mouseleave', () => {
  tooltipText.style.display = 'none';
});


tooltip.addEventListener('click', () => {
  message.textContent = 'Tooltip was clicked';
});