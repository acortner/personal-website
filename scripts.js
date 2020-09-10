var showingConnect = false;

const resume_json = {
    "experience": [
        {
            "company": "Amazon.com, Inc.",
            "role": "Software Development Engineer",
            "start": "Jun 2020",
            "end": "Sep 2020",
            "responsibilities": [
                "Developed canary test package for Resource Access Manager (RAM) team, using Python and Ruby scripts to run tests of services across regions.",
                "Utilized Amazon Web Services (AWS) &mdash; e.g. CloudFormation, Lambda, IAM &mdash; to develop native AWS software.",
                "Designed test structure using class inheritance to ease process of writing canary tests when onboarding new AWS services and resources to RAM.",
                "Automated process of cutting and tickets and rolling back code changes when canary tests report failures."
            ]
        },
        {
            "company": "Northwestern University",
            "location": "Farley Center for Entrepreneurship and Innovation, <a href=\"https://www.farley.northwestern.edu/programs-and-support/nuvention/web-and-media.html\" target=\"_blank\">NUvention &mdash; Web & Media</a>",
            "role": "Software Developer",
            "start": "Jan 2020",
            "end": "Jun 2020",
            "responsibilities": [
                "Designed website to bring attention to Chicago's local music scene and constructed front-end user interface for course project using ReactJS.",
                "Conducted interviews with Chicagoans to gauge interest and problem areas for project.",
                "Integrated website with remote database, storage, and hosting using Google Firebase.",
                "Worked using agile model with a team of five to plan sprints and determine immediate and long term goals."
            ]
        },
        {
            "company": "Partners HealthCare",
            "location": "Somerville, MA",
            "role": "Web Development Intern",
            "start": "Jun 2018",
            "end": "Aug 2018",
            "responsibilities": [
                "Built, maintained, updated websites for internal use and technical support within the Partners network using Drupal and SharePoint web editors as well as HTML, CSS, JavaScript, and PHP.",
                "Developed custom PHP modules and refined search engine for website using Linux.",
                "Designed posters, pamphlets, presentation materials, and other internal documents using the Adobe Creative Suite to advertise available applications and resources to clinical researchers.",
                "Communicated with team of roughly 50 employees to gather input and complete projects for department.",
                "More information can be found at <a href=\"rc.partners.org\" target=\"_blank\">rc.partners.org</a>."
            ]
        }
    ],
    "skills": [
        {
            "category": "Programming",
            "examples": "C(++), Java, JavaScript, Python, Ruby, Racket"
        },
        {
            "category": "Data Management",
            "examples": "Excel, Firebase, Python, R, SQL"
        },
        {
            "category": "Web Development",
            "examples": "CSS, HTML, JavaScript (jQuery, React), PHP"
        },
        {
            "category": "Cloud Computing",
            "examples": "Amazon Web Services"
        },
        {
            "category": "Design",
            "examples": "Adobe Creative Suite (Illustrator, InDesign, Photoshop)"
        },
        {
            "category": "Software",
            "examples": "Microsoft Office (Word, PowerPoint, Excel), Google Analytics"
        },
        {
            "category": "Languages",
            "examples": "English (Native), French (Proficient)"
        }
    ]
}

const design_json = {
    "NUvention": [
        {
            "src": "squares/NUvention/trumpet-blast.png",
            "alt": "Trumpet Blast Poster"
        },
        {
            "src": "squares/NUvention/team-impala.png",
            "alt": "Team Logo"
        },
        {
            "src": "squares/NUvention/trumpet.png",
            "alt": "Trumpet Logo"
        },
        {
            "src": "squares/NUvention/ad.png",
            "alt": "Facebook Advertisement"
        },
        {
            "src": "squares/NUvention/poster.png",
            "alt": "Facebook Advertisement"
        },
        {
            "src": "squares/NUvention/announcement.png",
            "alt": "Facebook Announcement"
        },
        {
            "src": "squares/NUvention/event.png",
            "alt": "Instagram Event Post"
        },
    ],
    "NURJ": [
        {
            "src": "squares/NURJ/nurj_bulb1.png",
            "alt": "NURJ Lightbulb Graphic"
        },
        {
            "src": "squares/NURJ/nurj_bulb2.png",
            "alt": "NURJ Lightbulb Graphic"
        },
        {
            "src": "squares/NURJ/nurj_logo.png",
            "alt": "NURJ Apparel Design"
        }
    ],
    "PHC": [
        {
            "src": "squares/PHC/hex.png",
            "alt": "Miscellaneous Hex Sticker Designs"
        },
        {
            "src": "squares/PHC/windows_front.png",
            "alt": "Windows 10 Info Card Front"
        },
        {
            "src": "squares/PHC/windows_back.png",
            "alt": "Windows 10 Info Card Back"
        },
        {
            "src": "squares/PHC/laptop.png",
            "alt": "Windows 10 Graphic"
        },
        {
            "src": "squares/PHC/typical-clinical.png",
            "alt": "Clinical Dataflow Graphic"
        },
        {
            "src": "squares/PHC/citrix.png",
            "alt": "CitrixFirst Text Treatment"
        },
        {
            "src": "squares/PHC/banner.png",
            "alt": "Retractable Banner"
        },
        {
            "src": "squares/PHC/biobank.png",
            "alt": "Biobank Info Card"
        },
        {
            "src": "squares/PHC/core-web.png",
            "alt": "Web Development Info Card"
        },
        {
            "src": "squares/PHC/eris.png",
            "alt": "ERIS Info Card"
        },
        {
            "src": "squares/PHC/redcap.png",
            "alt": "RedCap Info Card"
        },
        {
            "src": "squares/PHC/research.png",
            "alt": "Software Engineering Info Card"
        },
        {
            "src": "squares/PHC/software.png",
            "alt": "Software Info Card"
        },
        {
            "src": "squares/PHC/flyer.png",
            "alt": "ERIS Flyer"
        },
        {
            "src": "squares/PHC/r.png",
            "alt": "R User Group Poster"
        },
        {
            "src": "squares/PHC/imagemap.png",
            "alt": "Informational Image Map"
        },
        {
            "src": "squares/PHC/lightbulb.png",
            "alt": "Lightbulb Graphic"
        }
    ],
    "MISC": [
        {
            "src": "squares/MISC/earth1.png",
            "alt": "Environmental Science Assignment"
        },
        {
            "src": "squares/MISC/earth2.png",
            "alt": "Environmental Science Assignment"
        },
        {
            "src": "squares/MISC/earth3.png",
            "alt": "Environmental Science Assignment"
        },
        {
            "src": "squares/MISC/movie_objects.png",
            "alt": "Random Movie Objects"
        },
        {
            "src": "squares/MISC/pitch.png",
            "alt": "Fake App Pitch"
        }
    ]
}

$(function() {
    $('.main-page h1').fadeIn(500);
    $('#work').fadeIn(1000);
    $('#code').fadeIn(1500);
    $('#front-end').fadeIn(2000);
    $('#design').fadeIn(2500);
    $('#resume').fadeIn(3000);
    $('#about-me').fadeIn(3500);
    $('#connect').fadeIn(4000);
});

$(function() {
    $('#connect').click(function() {
        if (!showingConnect){
            $('.platforms li')
                .css('opacity', 0)
                .slideDown(700)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1200 });
            showingConnect = true;
        } else {
            $('.platforms li')
                .css('opacity', 1)
                .slideUp(700)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 500 });
            showingConnect = false;
        }
    });
});

/* Page transitions */

$(function() {
    $('.resume')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1000 });
});

$(function() {
    $('#resume').click(function() {
        $('.main-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'resume.html' }, 1000 );
    });
});

$(function() {
    $('.resume #left').click(function() {
        $('.resume')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'index.html' }, 1000 );
    });
});

$(function() {
    $('.design-page')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1000 });
});

$(function() {
    $('#design').click(function() {
        $('.main-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'designs.html' }, 1000 );
    });
});

$(function() {
    $('.design-page #left').click(function() {
        $('.design-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'index.html' }, 1000 );
    });
});

$(function() {
    $('.about-me')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1000 });
});

$(function() {
    $('#about-me').click(function() {
        $('.main-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'about-me.html' }, 1000 );
    });
});

$(function() {
    $('.about-me #left').click(function() {
        $('.about-me')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'index.html' }, 1000 );
    });
});

$(function() {
    $('.work-page')
                .css('opacity', 0)
                .slideDown(1000)
                .animate(
                { opacity: '1' },
                { queue: false, duration: 1000 });
});

$(function() {
    $('#front-end').click(function() {
        $('.main-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'work.html' }, 1000 );
    });
});

$(function() {
    $('.work-page #left').click(function() {
        $('.work-page')
                .css('opacity', 1)
                .slideUp(800)
                .animate(
                { opacity: '0' },
                { queue: false, duration: 1000 });
        setTimeout( function() { window.location = 'index.html' }, 1000 );
    });
});

/* End of transitions */

/* Modal */

const showModal = (src, alt) => {
    console.log(src);
    $('#myModal').show();
    $('#modalImg').attr('src', src);
    $('#myModal #caption').html(alt);
}

$(function() {
    $('#myModal').click(function() {
        $('#myModal').hide();
    });
});

/* Load content from JSON */

$(function() {
    var experience = $("<div></div>");
    for (var i = 0; i < resume_json.experience.length; i++) {
        var exp = resume_json.experience[i];
        var block = $("<div></div>");
        if (exp.location) {
            block.append("<p><strong>" + exp.company + ",</strong> " + exp.location + "<br>\
                <strong><em>" + exp.role + ",</strong></em> " + exp.start + " &mdash; " + exp.end + "</p>")
        } else {
            block.append("<p><strong>" + exp.company + "</strong><br>\
                <strong><em>" + exp.role + ",</strong></em> " + exp.start + " &mdash; " + exp.end + "</p>")
        }
        var responsibilities = $("<ul></ul>");
        for (var r = 0; r < exp.responsibilities.length; r++) {
            responsibilities.append("<li>" + exp.responsibilities[r] + "</li>");
        }
        block.append(responsibilities);
        experience.append(block);
    }
    var skills = $("<ul></ul>")
    for (var i = 0; i < resume_json.skills.length; i++) {
        var skill = resume_json.skills[i]
        skills.append("<li><strong>" + skill.category + "</strong>: " + skill.examples + "</li>")
    }
    $('.resume-content').append("<hr><h2>Experience</h2><hr></hr>", experience);
    $('.resume-content').append("<hr><h2>Skills</h2><hr></hr><br>", skills, "<br><br>");
});

$(function () {
    for (var i = 0; i < Object.keys(design_json).length; i++) {
        var category = Object.keys(design_json)[i]
        $('.' + category).append(getDesigns(category))
    }
})

const getDesigns = (name) => {
    var designs = $("<div></div>").addClass("dsgn-grid");
    for (var i = 0; i < design_json[name].length; i++) {
        var design = design_json[name][i];
        var block = $("<div></div>").addClass("dsgn")
        block.append("<img onclick=\"showModal(\'" + design.src + "\', \'" + design.alt + "\')\" src=\"" + design.src + "\" alt=\"" + design.alt + "\">")
        designs.append(block);
    }
    return designs;
}