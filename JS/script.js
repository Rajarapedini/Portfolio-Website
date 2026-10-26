$(document).ready(function () {

    function closeMenu() {
        $('#menu').removeClass('bx-x').addClass('bx-menu');
        $('.navbar').removeClass('nav-toggle');
    }

    $('#menu').click(function () {
        $(this).toggleClass('bx-menu bx-x');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('.navbar a').on('click', closeMenu);

    $(window).on('scroll load', function () {
        closeMenu();

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
        const target = $($(this).attr('href'));
        if (!target.length) return;
        e.preventDefault();
        const headerHeight = $('header').outerHeight() || 0;
        $('html, body').animate({
            scrollTop: Math.max(target.offset().top - headerHeight, 0),
        }, 500, 'linear')
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Rajarao Pedini | Software QA Engineer | rajaraopedini.in";
            $("#avatar").attr("href", "images/avatar.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#avatar").attr("href", "images/favhand.png");
        }
    });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "android app development", "web development", "Software testing"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

const categoryLabels = {
    mern: "MERN Stack",
    lamp: "LAMP Stack",
    basicweb: "Web",
    android: "Android App"
};

function projectCard(project) {
    const imgFile = /\.[a-z]+$/i.test(project.image) ? project.image : `${project.image}.png`;
    const label = categoryLabels[project.category] || project.category;
    const hasLink = url => url && url !== "#";
    let btns = "";
    if (project.self) {
        btns += `<a href="/" class="btn" data-self="true"><i class="fas fa-eye"></i> Live</a>`;
    } else if (hasLink(project.links.view)) {
        btns += `<a href="${project.links.view}" class="btn" target="_blank" rel="noopener"><i class="fas fa-eye"></i> Live</a>`;
    }
    if (hasLink(project.links.code)) {
        btns += `<a href="${project.links.code}" class="btn outline" target="_blank" rel="noopener"><i class="fas fa-code"></i> Code</a>`;
    }
    if (!btns) {
        btns = `<span class="soon">Links coming soon</span>`;
    }
    return `
    <div class="box ${project.category}">
      <div class="image">
        <img draggable="false" src="/images/projects/${imgFile}" alt="${project.name}" loading="lazy" />
      </div>
      <div class="content">
        <span class="category">${label}</span>
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <div class="btns">${btns}</div>
      </div>
    </div>`;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    projectsContainer.innerHTML = projects
        .filter(project => !project.hidden && project.category != "android")
        .slice(0, 10)
        .map(projectCard).join("");

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
if (window.matchMedia('(hover: hover)').matches) {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
}
// <!-- tilt js effect ends -->

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65379ff5a84dd54dc484a16a/1hdgkhma3';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 200, reset: false });

/* ===== "Live" on the portfolio card itself: scroll to top + friendly toast ===== */
(function () {
    function showToast(msg) {
        let toast = document.getElementById('self-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'self-toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        // force reflow so the transition runs each time
        void toast.offsetWidth;
        toast.classList.add('show');
        clearTimeout(showToast._t);
        showToast._t = setTimeout(function () {
            toast.classList.remove('show');
        }, 2600);
    }

    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[data-self]');
        if (!link) return;
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast("You're here only! 😄");
    });
})();
