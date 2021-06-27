// modal script starts
    // get modals
    var modalSignIn = document.getElementById('modalSignIn');
    var modalSignUp = document.getElementById('modalSignUp');
    var modalNewPost = document.getElementById('modalNewPost');
    // closes modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modalSignIn) {
            modalSignIn.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modalSignUp) {
            modalSignUp.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modalNewPost) {
            modalNewPost.style.display = "none";
        }
    }
// modal script ends

