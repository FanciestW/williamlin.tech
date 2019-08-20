$(document).ready(function(){
    $("#emailBtn").on("click", function(){
        $("#sendEmailForm").css('display', 'block');
    });

    $("#btnEmailMe").on("click", function(){
        $("#sendEmailForm").css('display', 'block');
    });

    $("#btnMessageSend").on("click", function(){
        var message = $("#emailFormMessage").val();
        var senderName = $("#emailFormSenderName").val();
        var senderEmail = $("#emailFormSenderEmail").val();
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