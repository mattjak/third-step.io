const buttonLink = document.getElementById("modal-button");
const containerLink = document.getElementById("modal-window");
const closeBtn = document.getElementById('close-modal-btn');

buttonLink.addEventListener("click", function () {
 containerLink.style.display = 'flex';
 });
 closeBtn.addEventListener('click', function() {
    containerLink.style.display = 'none';
    console.log (closeBtn);
});
