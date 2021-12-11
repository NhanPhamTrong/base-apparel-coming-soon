const emailAddressInput = $("input");
const warning = $("#warning");

warning.hide();

function CheckEmail() {
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRegex.test(emailAddressInput.val())) {
        emailAddressInput.removeClass("error");
        warning.hide();
    }
    else {
        emailAddressInput.addClass("error");
        warning.show();
    }
}

function CheckEmailByEnter(event) {
    if (event.which == 13) {
        CheckEmail();
    }
}

emailAddressInput.keypress(CheckEmailByEnter);