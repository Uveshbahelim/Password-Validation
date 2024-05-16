document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector(".pass-field input");
    const eyeIcon = document.querySelector(".pass-field i");
    const requirementListItems = document.querySelectorAll(".requirement-list li i");

    const requirements = [
        {regex: /.{8,}/, index: 0},
        {regex: /[0-9]/, index: 1},
        {regex: /[a-z]/, index: 2},
        {regex: /[A-Z]/, index: 3},
    ];

    passwordInput.addEventListener("keyup", function(e) {
        const value = e.target.value;

        requirements.forEach(function(requirement, index) {
            const isValid = requirement.regex.test(value);
            const requirementIcon = requirementListItems[index];

            if (isValid) {
                requirementIcon.className = "fa fa-check";
            } else {
                requirementIcon.className = "fa fa-circle";
            }
        });
    });

    eyeIcon.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.className = "fa fa-eye-slash";
        } else {
            passwordInput.type = "password";
            eyeIcon.className = "fa fa-eye";
        }
    });
});

