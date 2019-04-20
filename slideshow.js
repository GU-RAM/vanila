
let images = document.querySelectorAll('img');
let i = 1;

//  changing to imagies that are right in the gallery
document.querySelector('#to-right').addEventListener('click', () => {
	setTimeout(() => {
		if (i < 2) {
		hide();
		i+= 1;
        images[i].classList.add('active');
   } }, 1500); 
});

// changing to imagies that are left in the gallery
document.querySelector('#to-left').addEventListener('click', () => {
	setTimeout( () => {
		if (i > 0) {
		hide();
		i -= 1;
        images[i].classList.add('active');
   } }, 1500);
});

function hide() {
	return images[i].classList.remove('active');
};

