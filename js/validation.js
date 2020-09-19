function valid() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let theme = document.getElementById('theme');
    let comment = document.getElementById('comment');
    let email_validate_ket = email.value.lastIndexOf('.');
    let email_validate_shnik = email.value.search('@');

    if (name.value === '' || email.value === '' || theme.value === '' || comment.value === '') {
        alert('Խնդրում ենք լրացրեք բոլոր դաշտերը');
    }

    // emaili arjeqi mej man guka @ u ket ete erkusnel exan

    else if (email_validate_shnik <= 0 || email_validate_ket <= 0) {
        alert('խնդրում ենք ներմուծեք էլեկտրոնային հասցե');
    }

    else {
        let success = document.getElementById('ok');
        success.style.display = "block";
        if (success.style.display === "block") {
            setTimeout(function () {
                window.location.reload();
            }, 10000);
        }
        topFunction();
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}