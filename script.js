const shareBtn = document.getElementById('share');
const activeShareBtn = document.querySelector('.share-active');
const toolTip = document.getElementById('tool-tip');

// Toggle the tooltip when the share button is clicked
shareBtn.addEventListener('click', () => {
  toolTip.classList.toggle('active');
});

// Toggle the tooltip when the active share button is clicked
activeShareBtn.addEventListener('click', () => {
  toolTip.classList.toggle('active');
});