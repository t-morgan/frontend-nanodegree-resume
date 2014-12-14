var name = "Tim Morgan";
var role = "Programmer/Analyst";
var skills = ["Java", "Ruby", "JavaScript", "Python", "Cucumber",
              "HTML", "CSS", "SQL", "Agile", "jQuery", "AnjularJS",
              "Git", "Subversion"];

var bio = {
  "name" : name,
  "role" : role,
  "contacts" : {
    "email" : "tmorgan@manifestcorp.com",
    "twitter" : "@t_mrgn",
    "github" : "t-morgan",
    "location" : "Grove City, OH"
  },
  "pictureURL" : "images/me.jpg",
  "welcomeMessage" : "Hello World!",
  "skills" : skills
};

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
      "location" : "Columbus, OH",
      "website" : "http://www.franklin.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "December 2014",
      "courseSite" : "https://www.udacity.com/course/ud804",
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

function displayBio() {
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

    var formattedLocation =
      HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole).prepend(formattedName);
    $("#header").prepend(formattedPicture);
    $("#topContacts").append(formattedEmail).
      append(formattedTwitter).
      append(formattedGithub).
      append(formattedLocation);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      displaySkills();
    }
}

function displaySkills() {
  $("#header").append(HTMLskillsStart);
  $.each(bio.skills, function(i, value) {
    var formattedSkill =
    HTMLskills.replace("%data%", value);
    $("#skills").append(formattedSkill);
  });
}

function displayWork() {
  for (position in work.positions) {
    var workPosition = work.positions[position];

    var formattedWorkEmployer =
      HTMLworkEmployer.replace("%data%", workPosition.employer);

    var formattedWorkTitle =
      HTMLworkTitle.replace("%data%", workPosition.title);

    var employerTitleLink = formattedWorkEmployer.replace("#",
      workPosition.website) + formattedWorkTitle;

    var formattedWorkDates =
      HTMLworkDates.replace("%data%", workPosition.dates);

    var formattedWorkLocation =
      HTMLworkLocation.replace("%data%", workPosition.location);

    var formattedWorkDescription =
      HTMLworkDescription.replace("%data%", workPosition.description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(employerTitleLink).
      append(formattedWorkDates).
      append(formattedWorkLocation).
      append(formattedWorkDescription);
  }
}

function displayEducation() {
  for (school in education.schools) {
    var schoolAttended = education.schools[school];
    var formattedSchoolName =
      HTMLschoolName.replace("%data%", schoolAttended.name);
    var formattedSchoolDegree =
      HTMLschoolDegree.replace("%data%", schoolAttended.degree);
    var schoolNameDegreeLink = formattedSchoolName.replace("#",
      schoolAttended.website) + formattedSchoolDegree;
    var formattedSchoolDates =
      HTMLschoolDates.replace("%data%", schoolAttended.years);
    var formattedSchoolLocation =
      HTMLschoolLocation.replace("%data%", schoolAttended.location);
    var formattedSchoolMajor = "";
    for (major in schoolAttended.majors) {
      formattedSchoolMajor = formattedSchoolMajor +
        HTMLschoolMajor.replace("%data%", schoolAttended.majors[major]);
    }
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(schoolNameDegreeLink).
      append(formattedSchoolDates).
      append(formattedSchoolLocation).
      append(formattedSchoolMajor);
  }

  if (education.onlineCourses.length > 0) {
    displayOnlineCourses();
  }
}

function displayOnlineCourses() {
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    var onlineCourse = education.onlineCourses[course];
    var formattedOnlineTitle =
      HTMLonlineTitle.replace("%data%", onlineCourse.title);
    var formattedOnlineSchool =
      HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var titleSchoolLink = formattedOnlineTitle.replace("#",
      onlineCourse.courseSite) + formattedOnlineSchool;
    var formattedOnlineDates =
      HTMLonlineDates.replace("%data%", onlineCourse.dates);
    var formattedOnlineURL =
      HTMLonlineURL.replace("%data%", onlineCourse.url).
        replace("#", onlineCourse.url);

    $("#education").append(HTMLonlineClassesStart);
    $(".online-class-entry:last").append(titleSchoolLink).
      append(formattedOnlineDates).
      append(formattedOnlineURL);
  }
}

function internationalizeName(name) {
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


// Fill in resume contents
displayBio();

if (work.positions.length > 0) {
  displayWork();
}

projects.display();

displayEducation();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
