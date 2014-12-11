var name = "Tim Morgan";
var role = "Programmer/Analyst";
var skills = ["Java", "Ruby", "JavaScript", "Python", "Cucumber",
              "HTML", "CSS", "SQL", "Agile", "jQuery", "AnjularJS",
              "Git", "Subversion"];

var work = {
  "positions" : [
    {
      "title" : "Programmer/Analyst",
      "employer" : "Manifest Solutions",
      "dates" : "January 2014 - Present",
      "location" : "Upper Arlington, OH",
      "description" : "Completed Agility Boot Camp: manage project builds with Maven and Jenkins; use TDD with RSpec and JUnit; implement ATDD with Cucumber, Watir-WebDriver, and Page-Object; develop a blog using Groovy and Grails, HTML, JavaScript / jQuery, and CSS; collaborate in an Agile team environment to move goals and fix blocks.",
      "website" : "http://manifestcorp.com"
    },
    {
      "title" : "Web Developer",
      "employer" : "MoveEasy.com",
      "dates" : "October 2013 - January 2014",
      "location" : "Columbus, OH",
      "description" : "Receive kudos on first day of work from job referrer for quick task completion; accept requests for web application changes; set up Python / Django development environment; guide team on use of Git version control; Git code management; edit HTML, CSS, JavaScript / jQuery; alter Python/ Django code as needed; test and verify code changes; report status updates to development team / CEO; help an awesome startup complete the 10xelerator.",
      "website" : "https://www.moveeasy.com/"
    }
  ]
};


var education = {
  "schools" : [
    {
      "name" : "Franklin University",
      "degree" : "BS",
      "majors" : ["Computer Science"],
      "years" : "2011-2014",
      "city" : "Columbus"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "2014",
      "url" : "http://www.udacity.com"
    }
  ]
};

var projects = {
  "projectList" : [
    {
      "title" : "Uptivity Product Testing",
      "dates" : "August 2014",
      "description" : "Design and execute acceptance scenarios and test scripts for C# application. Help developers locate and correct bugs. Provide test plan documentation and test results to product owner and QA manager.",
      "image" : "images/uptivity.png",
      "website" : "http://www.uptivity.com/"
    }
  ]
};

var bio = {
  "name" : name,
  "role" : role,
  "contacts" : {
    "email" : "tmorgan@manifestcorp.com",
    "twitter" : "@t_mrgn",
    "github" : "t-morgan"
  },
  "pictureURL" : "images/me.jpg",
  "welcomeMessage" : "Hello World!",
  "skills" : skills,
  "work" : work
};


var formattedName =
    HTMLheaderName.replace("%data%", bio.name);

var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);

var formattedPicture =
    HTMLbioPic.replace("%data%", bio.pictureURL);

var formattedWelcomeMessage =
    HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedEmail =
    HTMLemail.replace("%data%", bio.contacts.email);

var formattedTwitter =
    HTMLtwitter.replace("%data%", bio.contacts.twitter);

var formattedGithub =
    HTMLgithub.replace("%data%", bio.contacts.github);

function displayWork() {
  for (position in bio.work.positions) {
    $("#workExperience").append(HTMLworkStart);
    var workPosition = bio.work.positions[position];
    var formattedWorkEmployer =
    HTMLworkEmployer.replace("%data%", workPosition.employer);
    var formattedWorkTitle =
    HTMLworkTitle.replace("%data%", workPosition.title);
    var formattedWorkDates =
    HTMLworkDates.replace("%data%", workPosition.dates);
    var formattedWorkLocation =
    HTMLworkLocation.replace("%data%", workPosition.location);
    var formattedWorkDescription =
    HTMLworkDescription.replace("%data%", workPosition.description);
    var employerTitleLink = formattedWorkEmployer.replace("#",
      workPosition.website) + formattedWorkTitle;
    $(".work-entry:last").append(employerTitleLink).
    append(formattedWorkDates).
    append(formattedWorkLocation).
    append(formattedWorkDescription);
  }
}
$("#header").prepend(formattedRole).prepend(formattedName);
$("#header").prepend(formattedPicture);
$("#topContacts").append(formattedEmail).append(formattedTwitter).append(formattedGithub);
$("#header").append(formattedWelcomeMessage);
if (bio.work.positions.length > 0) {
  displayWork();
}

$("#education").append(HTMLschoolStart);
$(".education-entry").append(education.schools[0].name);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $.each(bio.skills, function(i, value) {
    var formattedSkill =
      HTMLskills.replace("%data%", value);
    $("#skills").append(formattedSkill);
  });
}

$("#main").append(internationalizeButton);

function inName(name) {
  var formattedName = name;
  var names = formattedName.split(" ");
  var firstName = names[0];
  var lastName = names[1];
  formattedName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
  formattedName += " " + lastName.toUpperCase();
  return formattedName;
}

projects.display = function() {
  for (var project in this.projectList) {
    var projectData = this.projectList[project];
    var formattedProjectTitle =
      HTMLprojectTitle.replace("%data%", projectData.title).
        replace("#", projectData.website);
    var formattedProjectDates =
      HTMLprojectDates.replace("%data%", projectData.dates);
    var formattedProjectDescription =
      HTMLprojectDescription.replace("%data%", projectData.description);
    var formattedProjectImage =
      HTMLprojectImage.replace("%data%", projectData.image);
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle).
      append(formattedProjectDates).
      append(formattedProjectDescription).
      append(formattedProjectImage);
  }
}
projects.display();

$("#mapDiv").append(googleMap);
