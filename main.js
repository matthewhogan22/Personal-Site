"use strict";

// Variable Declarations

// JQuery Section
jQuery(async function($) {
    console.log("Webpage Ready!");

    var edu_button = $("#edu_box");
    edu_button.on("click", async function(e) {
        console.log("Education");
    });
});