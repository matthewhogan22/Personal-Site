"use strict";

// Variable Declarations
var next_page;

// JQuery Section
jQuery(async function($) {
    console.log("Webpage Ready!");

    var edu_button = $("#edu_box");
    edu_button.on("click", async function(e) {
        console.log("Education");
        next_page = "Education";
        window.location.href = "education.html";
    });

    var work_button = $("#work_box");
    work_button.on("click", async function(e) {
        console.log("Work Experience");
        next_page = "Work Experience";
        window.location.href = "work_exp.html";
    });

    var projects_button = $("#project_box");
    projects_button.on("click", async function(e) {
        console.log("Projects");
        next_page = "Projects";
        window.location.href = "projects.html";
    });
});