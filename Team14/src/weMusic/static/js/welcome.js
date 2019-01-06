$(document).ready(function () {
    $('#loginBtn').focus();
    $('#loginBtn').keypress = function(e) {
        if (e.which == 13) {  // enter, return
            $('#loginBtn').click();
        }
    };
    $('#registerBtn').click(function () {
        $('#login').empty();
        $('#login').append(generateRegisterHTML);
    });
    var access_code = $('#access-code').val();
    if (access_code.length > 10) {
        $('#spotify-auth').show();
        $('#OK').focus();
        $('#OK').keypress = function(e) {
            if (e.which == 13) {  // enter, return
                $('#OK').click();
            }
        };
    } else {
        $('#spotify-auth').hide();
    }
})
