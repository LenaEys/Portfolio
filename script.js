const projects = [
  {
    title: "Flip-Up Trip Perturbation Device",
    image: "assets/project-1.jpg",
    description: "Independently designed and built a prototype tripping device for trip-perturbation experiments. The design could be triggered by both computer and force-plate input. Work included torque calculations, a bill of materials, Arduino coding, circuit design, breadboard integration, troubleshooting, and iterative prototyping."
  },
  {
    title: "Haptic Vision — UTESCA",
    image: "assets/project-2.jpg",
    description: "Worked on a robotic accessibility project intended to help visually impaired users interact with digital platforms. Used Python and Unity to convert 2D user interfaces into a digital 3D model for integration with existing robotic prototypes. The full product later won the 2026 Troost ILead Difference Maker Award."
  },
  {
    title: "Footwear Friction & Torsion Research",
    image: "assets/project-3.jpg",
    description: "Analyzed data from in-ground force plates, a load cell and oscilloscope setup, and OptiTrack markers. Experiments investigated static and dynamic shoe-ground/insole-fabric friction and maximum moments during shoe torsion and bending."
  },
  {
    title: "Arduino Coding Box",
    image: "assets/project-4.jpg",
    description: "Designed the housing for an introductory Arduino coding box for a Wilfrid Laurier WiSTEM event. The project combined CAD design with an educational goal: making hands-on coding more approachable for women exploring STEM."
  },
  {
    title: "Prosthetic Wrist CAD",
    image: "assets/project-5.jpg",
    description: "A personal CAD project exploring the design and modeling of a prosthetic wrist. This project demonstrates SolidWorks-based mechanical design and an interest in human-centered engineering applications."
  },
  {
    title: "Automated Arduino Systems",
    image: "assets/project-6.jpg",
    description: "A collection of Arduino projects including custom characters, a re-centering motor, and an automatically activated fan. These projects provided hands-on practice with embedded programming, sensors, motors, and iterative troubleshooting."
  }
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map((project, i) => `
    <article class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="project-placeholder" style="display:none;">
          <div class="project-number">0${i + 1}</div>
          <p>Add project photo</p>
        </div>
      </div>
      <div class="project-content">
        <button class="project-title" aria-expanded="false" aria-controls="description-${i}">
          ${project.title}
        </button>
        <div class="project-description" id="description-${i}">
          <div><p>${project.description}</p></div>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".project-title").forEach(button => {
    button.addEventListener("click", () => {
      const description = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = description.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active-page", page.id === pageId);
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(el => {
  el.addEventListener("click", () => showPage(el.dataset.page));
});

renderProjects();
