// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // When the user clicks the "Devour It!!" button (PUT)
    $(".devour-btn").on("click", function (event) {
        var id = $(this).data("id")
        var burger = {
            devoured: false
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: burger
        }).then(
            function () {
                console.log("Burger devoured!");
                location.reload();
            }
        );
    });

    $(".add-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
