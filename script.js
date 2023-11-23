
        // Get the notification element
        var notification = document.getElementById("notification");

        // Get the close button element
        var close = document.getElementById("notification-close");

        // Add a click event listener to the close button
        close.addEventListener("click", function() {
            // Play a sound when the notification is closed
            var audio = new Audio("sound.mp3");
            audio.play();

            // Add the slideout class to the notification element
            notification.classList.add("slideout");

            // Remove the notification element after the animation ends
            notification.addEventListener("animationend", function() {
                notification.remove();
            });
        });
