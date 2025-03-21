document.addEventListener("DOMContentLoaded", function () {

  const content = document.getElementById("content");
  const links = document.querySelectorAll(".nav-link");

  const sections = {
    about: ` 
            <div class="fade-in">
                <h2>About Me</h2>
                <div style="text-align: justify; max-width: 800px; margin: 0 auto;">
                    <p style="margin: 20px 0;">
                        Olaa everyone👋 I am an 8th semester student of the Mechatronics and Artificial Intelligence study program at the Indonesian University of Education, and 
focusing on the field of mechatronics. Active in organizations and have good communication, analysis, problem-solving skills, able to work both individually and in teams, and easily adapt to new things.
                    
                    <h3 style="margin: 20px 0;">🔵 Current Skill</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin: 10px 0;">💻 Software: Arduino IDE, Thonny, Visual Studio Code, Microsoft Office</li>
                        <li style="margin: 10px 0;">🤖 Machine Learning Development: Python, Google Cloud</li>
                        <li style="margin: 10px 0;">🎨 Design: AutoCAD, Canva, Eagle, Figma</li>
                    </ul>

                    <h3 style="margin: 20px 0;">🎯 Current Focus</h3>
                    <p>Currently diving deep into computer vision technologies and exploring the exciting world of AI/ML integration in web and education applications.</p>
                </div>
            </div>
        `,
    projects: `
            <div class="fade-in">
                <h2>Projects</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 SPACEFINDER</h3>
                        <p style="margin: 10px 0;"> A Smart parking slot prediction system using IoT based IR sensors and Machine Learning that can predict parking availability in real-time for the next 7 days. The goal is to make it easier for drivers to find empty parking spaces at their desired location and time.</p>
                        <div style="margin-top: 15px;">
                            <a href="https://www.youtube.com/watch?v=8pESHJ7g4QE" target="_blank" style="color: #0066cc; text-decoration: none;">YouTube</a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 UFOOD</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" target="_blank" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        `,
    contact: `
            <div class="fade-in">
                <h2>Let's Connect!</h2>
                <div style="max-width: 600px; margin: 2rem auto; text-align: left;">
                    <p style="margin: 1rem 0;">I'm always excited to collaborate on interesting projects or just have a chat about technology and innovation. Feel free to reach out through any of these channels:</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0;">
                        <a href="mailto:nurbanafsyah@upi.edu" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📧 nurbanafsyah@upi.edu
                        </a>
                        <a href="https://linkedin.com/in/nabilanrb" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            💼 LinkedIn: /in/nabilanrb
                        </a>
                        <a href="https://github.com/nabilanrb" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            🐱 GitHub: @nabilanrb
                        </a>
                        <a href="https://instagram.com/nabila.nrb" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📸 Instagram: nabila.nrb
                        </a>
                    </div>

                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                        <h3 style="margin-bottom: 1rem;">🌟 Current Status</h3>
                        <p>Open to freelance projects and exciting collaboration opportunities!</p>
                    </div>
                </div>
            </div>
        `,
  };

  function showSection(sectionId) {
    content.innerHTML = sections[sectionId];
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  showSection("about");
});
