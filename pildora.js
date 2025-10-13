const tooltip = document.querySelector('.tooltip');
const tooltipText = document.querySelector('.tooltip-text');
const message = document.querySelector('.tooltip-click');

tooltip.addEventListener('mouseenter', () => {
  tooltipText.style.display = 'block';
});

tooltip.addEventListener('mouseleave', () => {
  tooltipText.style.display = 'none';
});

//add now a button stead of tooltip
tooltip.addEventListener('click', () => {
  message.textContent = 'Tooltip was clicked';
});