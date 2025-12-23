document.addEventListener("DOMContentLoaded", () => {
  // javaScript For the Testimonial
  const successStories = [
    {
      quote:
        "EduStream helped me believe in myself and improve my results, especially in Mathematics and Physics.",
      student: "- Sarah Twin",
      class: "Ss3",
    },

    {
      quote:
        "The teachers are very patient and always ready to explain things until I understand.",
      student: "- Amina Bello",
      class: "Ss2",
    },

    {
      quote:
        "Since I joined this school, my confidence in public speaking and debates has really improved.",
      student: "- Adeyemi Micheal",
      class: "Jss3",
    },

    {
      quote:
        "I enjoy the learning environment and the way our teachers encourage us to ask questions.",
      student: "- Grace Mensah",
      class: "Ss1",
    },

    {
      quote:
        "The practical lessons in science helped me understand topics I used to find difficult.",
      student: "- Samuel Okafor",
      class: "JSS 2",
    },

    {
      quote:
        "I like how the school combines discipline with care and motivation for students.",
      student: "- Fatima Lawal",
      class: "SS 2",
    },

    {
      quote:
        "The extra lessons and revision classes helped me perform better in my examinations.",
      student: "- Emmanuel Boateng",
      class: "SS 3",
    },

    {
      quote:
        "Group studies and assignments helped me make new friends and learn faster.",
      student: "- Ruth Johnson",
      class: "JSS 1",
    },

    {
      quote:
        "The teachers make learning interesting and encourage us to always do our best.",
      student: "- Ibrahim Musa",
      class: "SS 1",
    },

    {
      quote:
        "This school taught me discipline, teamwork, and how to manage my time properly.",
      student: "- Esther Nwoye",
      class: "JSS 3",
    },
  ];

  // Testimonial Section
  const testimonialSection = document.querySelector("#testimonialsSection");

  const testimonialContainer = document.createElement("div");
  testimonialContainer.classList.add("container");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("section-title");

  const sectionTitleText = document.createElement("h2");
  sectionTitleText.textContent = "Success Stories";

  const testimonialSlider = document.createElement("div");
  testimonialSlider.classList.add("testimonial-slider");

  const testimonialItem = document.createElement("article");
  testimonialItem.classList.add("testimonial-item");

  const testimonialQuote = document.createElement("p");
  testimonialQuote.classList.add("quote");
  // testimonialQuote.textContent = successStories[0]['quote'];

  const testimonialAuthor = document.createElement("footer");
  testimonialAuthor.classList.add("author");
  // testimonialAuthor.textContent = `${successStories[0]['student']}, Class of ${successStories[0]['class']}`;

  sectionTitle.appendChild(sectionTitleText);
  testimonialContainer.appendChild(sectionTitle);
  testimonialItem.appendChild(testimonialQuote);
  testimonialItem.appendChild(testimonialAuthor);
  testimonialSlider.appendChild(testimonialItem);
  testimonialContainer.appendChild(testimonialSlider);
  testimonialSection.appendChild(testimonialContainer);

  let index = 0;

  function showSlide() {
    testimonialQuote.textContent = successStories[index].quote;
    testimonialAuthor.textContent = `${successStories[index]["student"]}, Class of ${successStories[index]["class"]}`;
    index = (index + 1) % successStories.length;
  }
  // Show first Slide
  showSlide();

  // Auto slide every 4 seconds
  setInterval(showSlide, 4000);
});
