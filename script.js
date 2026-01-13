document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "ReactChatApp",
            desc: "Real-time chat application built with React (from GitHub).",
            link: "https://github.com/RipMickel/ReactChatApp"
        },
        {
            title: "Portfolio Site",
            desc: "This portfolio website built with HTML, CSS, and JS.",
            link: "#"
        },
        {
            title: "Todo App",
            desc: "Task manager with basic interactions.",
            link: "#"
        }
    ];

    const projectList = document.getElementById('projectList');

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <a href="${p.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(card);
    });

    document.getElementById('contactForm')
        .addEventListener('submit', e => {
            e.preventDefault();
            alert("Thank you, message sent!");
        });
});
