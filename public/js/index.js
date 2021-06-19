// modal script starts
    // get modals
    var modalLogin = document.getElementById('modalLogin');
    var modalNewUser = document.getElementById('modalNewUser');
    // closes modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modalLogin) {
            modalLogin.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modalNewUser) {
            modalNewUser.style.display = "none";
        }
    }
// modal script ends