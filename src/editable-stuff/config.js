// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kenneth",
  middleName: "",
  lastName: "Ascheri",
  message: " | Engineer | Programmer | Web Developer | Videographer | Artist | ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kenneth-ascheri/",
    },
    {
      image: "fa-github",
      url: "https://github.com/kascheri12",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kenny.ascheri",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kennyascheri/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/kennethascheri/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kennethascheri.png"),
  imageSize: 375,
  message:
    "My name is Kenneth Ascheri. I'm a graduate of California State University, Fullerton class of 2015. My degree is in Computer Science with a focus in Software Engineering. I'm most passionate about programming, adventure, art, and making memories with my family. My goal is to pursue these passions and document our best memories to share with friends and family. In my time off the clock I enjoy sharpening my programming skills, disc golfing, and editing youtube videos of my adventures.",
  resume: "https://docs.google.com/document/d/1ht1aVOeeboMJzI2zhfo3aoWMd-70DjQ7699zVDDHTZI/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kascheri12", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['golem_util','pdga_scraper','rotkehlchen','golem'],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message: "As a leader, it is my responsibility to ensure that every team member has the necessary tools and environment to succeed. I need to be approachable, professional, personable, and expressive. To foster a productive team, I need to express gratitude and trust.",
  images: [
    { 
      img: require("../assets/img/lanecc_logo.png"), 
      label: "Lead Programmer/Systems Analyst", 
      paragraph: "Provide leadership to a team of Programmer/Systems Analysts understanding complex systems throughout the organization. Initialize space for teams to present and share project and maintenance deliverables with scrum influenced cycles."
    },
    { 
      img: require("../assets/img/lccef_logo.webp"), 
      label: "Vice President of Labor Relations", 
      paragraph: "Engage in meaningful support and advocacy for the Classified employee local of paraprofessionals at Lane Community College. Support and represent labor relation queries between employees and management, bargain reopener contract agreements, chair the annual budget development subcommittee through the fiscal cycle."
    },
  ],
  imageSize: {
    width:"75%",
    height:"75%"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 65 },
    { name: "JQuery", value: 80 },
    { name: "PHP", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "C#", value: 80 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 }
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kennethascheri@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      company: 'Lane Community College',
      role: 'Programmer/Systems Analyst',// Here Add Company Name
      companylogo: require('../assets/img/lanecc_logo.png'),
      date: 'Aug 2016 – Present',
    },
    {
      company: 'XDimensional Technologies, Inc.',
      role: 'Product Support Engineer',
      companylogo: require('../assets/img/xdti_logo.png'),
      date: 'Dec 2013 – Aug 2016',
    },
  ]
};

const qr = {
  heading: "QR",
  imageLink: require("../editable-stuff/qr_code_home.png")
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, qr };
