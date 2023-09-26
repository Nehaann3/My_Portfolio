function toggleMenu(){
	const menu = document.queryselector(".menu-links");
	const icon = document.queryselector(".hamburger-icon");
	menu.classlist.toggle("open");
	icon.classlist.toggle("open");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});