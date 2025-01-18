document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation menu clicks
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').slice(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle project clicks
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            alert('Project clicked: ' + project.querySelector('h3').textContent);
        });
    });
});
