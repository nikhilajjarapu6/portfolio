// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


document.addEventListener("DOMContentLoaded", function() {
  // Define the JSON object directly in the JS file
  const experiences = [
    {
      company: "Goldman Sachs",
      role: "Software Engineer",
      duration: "Oct 2023 - Present",
      description: "Contributed to the development of a risk government monitoring system within an Agile environment, utilizing Spring Boot and enhancing integration with relational databases like Sybase.",
      modalId: "exampleModal1",
      details: [
        "Applied Mitthra ORM integrated with Sybase for efficient borrower and risk score data storage, showcasing strong database management abilities.",
        "Worked with cross-functional teams to ensure smooth project delivery, adhering to Agile methodologies.",
        "Collaborated with business analysts and data scientists to define and optimize risk data flow."
      ]
    },
    {
      company: "Comcast",
      role: "GoLang Developer",
      duration: "Jul 2023 - Sep 2023",
      description: "Maintained network application using GoLang, utilizing experience with Linux OS, GitHub, and SSH Key management to streamline and secure deployment processes.",
      modalId: "exampleModal2",
      details: [
        "Optimized network performance by integrating interfaces with AWS Lambda, and managed data efficiently with NQL and MongoDB.",
        "Tested and monitored SNMP devices to ensure network connectivity, supporting reliable device registration and accurate error correction.",
        "Worked with the team to implement CI/CD pipelines for automated deployment and testing."
      ]
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      duration: "May 2020 - Jun 2021",
      description:  "Maintained network application using GoLang, utilizing experience with Linux OS, GitHub, and SSH Key management to streamline and secure deployment processes.",
      modalId: "exampleModal3",
      details: [
        "Collaborated in an Agile environment to build secure healthcare microservices using Spring Boot and RESTful APIs.",
        "Implemented Spring Data JPA with MySQL to manage data, optimizing data access and ensuring reliable storage of patient, doctor, and admin records.",
        "Integrated JWT token-based authentication and OAuth 2.0 for secure, role-based access control across services."
      ]
    }
  ];

  // Function to load experiences dynamically
  const loadExperiences = () => {
    const experienceContainer = document.getElementById("experience-container");

    experiences.forEach((experience) => {
      // Create a card element for each experience
      const card = document.createElement("div");
      card.className = "blogpost col-md-4 col-10 mt-5 mt-md-0";

      // Card inner HTML structure
      card.innerHTML = `
        <div class="card">
          <div class="card-body px-4">
            <span class="ms-3">${experience.duration}</span>
            <h4 class="card-title">
              ${experience.company} <br>
              ${experience.role}
            </h4>
            <p class="text-muted" style="text-align: justify">
              ${experience.description} 
            </p>
            <a href="#" class="read-more-btn link" data-bs-toggle="modal" data-bs-target="#${experience.modalId}" data-id="${experience.modalId}">Read More</a>
          </div>
        </div>
      `;

      // Append the card to the container
      experienceContainer.appendChild(card);
    });
  };

  // Function to populate modal with dynamic content
  const populateModal = (modalId) => {
    const modal = experiences.find(exp => exp.modalId === modalId);
    if (modal) {
      const modalBody = document.querySelector(`#${modalId} .modal-body`);
      const detailsList = modal.details.map(detail => `<li>${detail}</li>`).join('');
      modalBody.innerHTML = `
        <div class="content mt-3">
          <small></small><span class="text-muted ms-2">${modal.duration}</span>
          <h4 class="card-title mt-3">${modal.company} <br>${modal.role}</h4>
          <ul class="text-muted mt-3">
            ${detailsList}
          </ul>
        </div>
      `;
    }
  };

  // Event listener for modal show event to populate the modal content
  $('#experience-container').on('click', '.read-more-btn', function (event) {
    const modalId = $(this).data('id');  // Get the modal ID from the button's data-id
    const modalElement = document.getElementById(modalId);

    // Bootstrap event listener for modal showing
    $(modalElement).on('shown.bs.modal', function () {
      populateModal(modalId); // Populate the modal once it is shown
    });
  });

  // Load experiences when the page is loaded
  loadExperiences();
});
