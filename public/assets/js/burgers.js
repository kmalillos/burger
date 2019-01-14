// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // When the user clicks the "Devour It!!" button (PUT)
    $(".devourBurgerButton").on("click", function (event) {
        var id = $(this).data("id")
        var changeBurger = {
            devoured: 0
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: changeBurger
        }).then(
            function () {
                console.log("Updated burger status.");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newCat = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/cats", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
