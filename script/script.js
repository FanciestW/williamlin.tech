$(document).ready(function() {

    $("#emailBtn, #btnEmailMe").on("click", openSendEmailModal);
    $("#btnMessageClose, #sendEmailClose").on("click", closeSendEmailModal);

    // Send message via sendMeMail API.
    $("#btnMessageSend").on("click", function(){
        var emailMessage = $("#emailFormMessage").val();
        var senderName = $("#emailFormSenderName").val();
        var senderEmail = $("#emailFormSenderEmail").val();

        body = JSON.stringify({
            message: emailMessage,
            email: senderEmail,
            name: senderName,
        });
        $.post('https://608y0baaza.execute-api.us-east-1.amazonaws.com/dev/email', body).done(function(data) {
            console.log(data);
        });
        $("#sendEmailForm").css('display', 'none');
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == document.getElementById('sendEmailForm')) {
            closeSendEmailModal();
        }
    }
});

function openSendEmailModal() {
    $("#sendEmailForm").css('display', 'block');
}

function closeSendEmailModal() {
    $("#sendEmailForm").css('display', 'none');
}