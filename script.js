const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300);
  const y = Math.floor(Math.random() * 300);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  message.textContent = "Yay! I ❤️ you too!";
});
