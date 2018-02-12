$(document).ready(function(){
    $("#emailBtn").on("click", function(){
        $("#sendEmailForm").css('display', 'block');
    });

    $("#btnMessageSend").on("click", function(){
        $("#emailMessageForm").submit();
    });
});