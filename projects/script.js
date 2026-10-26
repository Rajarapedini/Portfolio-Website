$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('bx-menu bx-x');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('bx-x').addClass('bx-menu');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Rajarao Pedini";
            $("#favcon").attr("href", "/images/avatar.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favcon").attr("href", "/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
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
    let projectsContainer = document.querySelector(".work .box-container");
    projectsContainer.innerHTML = projects.filter(project => !project.hidden).map(projectCard).join("");
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

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