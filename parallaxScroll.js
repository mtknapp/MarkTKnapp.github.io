var ypos, image;
function parallax (){
	ypos = window.pageYOffset;
	image = document.getElementById('image');
	image.style.top = ypos * 0.4 + 'px';
}
window.addEventListener('scroll',parallax);