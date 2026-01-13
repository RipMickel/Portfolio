document.addEventListener('DOMContentLoaded', () => {

      const projects = [
        { title: "Portfolio Site", desc: "This site you’re viewing now." },
        { title: "Todo App", desc: "Task manager with basic interactions." },
        { title: "Game Project", desc: "Fun browser game example." }
    ];

        const projectList = document.getElementById('projectList');

         projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
        projectList.appendChild(card);
    });

     document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        alert("Thank you, message sent!");
    });

});