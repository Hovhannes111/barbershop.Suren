let hamburg_menu = document.getElementById('hamburg_menu');

function hamburgerFunction() {
    let navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block'){
        navbar.style.display = 'none';
    }else {
        navbar.style.display = 'block';
    }

}
