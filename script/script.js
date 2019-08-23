$(document).ready(function(){
    $("#emailBtn").on("click", function(){
        $("#sendEmailForm").css('display', 'block');
    });

    $("#btnEmailMe").on("click", function(){
        $("#sendEmailForm").css('display', 'block');
    });

    $("#btnMessageSend").on("click", function(){
        var emailMessage = $("#emailFormMessage").val();
        var senderName = $("#emailFormSenderName").val();
        var senderEmail = $("#emailFormSenderEmail").val();
        req = {
            cache: false,
            dataType: 'json',
            async: true,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            url: 'https://608y0baaza.execute-api.us-east-1.amazonaws.com/dev/email',
            method: 'POST'
        };
        $.ajax(req).done(function(res) {
            console.log('Response:');
            console.log(res);
        });
        $("#sendEmailForm").css('display', 'none');
    });

    // Get the modal
    var modal = document.getElementById('sendEmailForm');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});