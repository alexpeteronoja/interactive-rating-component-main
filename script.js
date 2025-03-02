let submitValue = "";


$(document).click((event) => {

    if ($(event.target).hasClass("rate-btn")) {

        event.preventDefault();
        $(".rate-btn").each(function() {
            $(this).removeClass("selected");
        });

        $(event.target).addClass("selected");


        submitValue = $(event.target).val();

    }
});

$("#rating-form").submit((event) => {
    event.preventDefault();
    if (submitValue !== "") {
        $("#input-section").addClass("hide");
        $("#success-section").removeClass("hide");
        $(".btn-result").text(submitValue);
        console.log(submitValue);
    }


})