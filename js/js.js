const light_count = 6;
let current_light = -1;
let direction = "RIGHT";
let intervalId = null;

const updateLight = () => {
    $(".light").css("background", "white"); // Reset all lights to white

    if (direction === "RIGHT") {
        current_light++;
        if (current_light >= light_count) {
            current_light = light_count - 1; // Stay within bounds
            direction = "LEFT"; // Change direction
        }
    } else {
        current_light--;
        if (current_light < 0) {
            current_light = 0; // Stay within bounds
            direction = "RIGHT"; // Change direction
        }
    }

    // Set colors
    $(".light").eq(current_light).css("background-color", "red");
    $(".light").eq((current_light + 1) % light_count).css("background-color", "pink");
};

$("#start").click(function () {
    if (!intervalId) { // Prevent multiple intervals
        intervalId = setInterval(updateLight, 100);
    }
});

$("#stop").click(function () {
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId
});