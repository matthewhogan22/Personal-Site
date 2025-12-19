"use strict";

// Variable Declarations

// JQuery Section
jQuery(async function($) {
    console.log("Webpage Ready!");

    var back_button = $("#back_button");
    back_button.on("click", async function(e) {
        console.log("Back");
        window.location.href = "main.html";
    });
});