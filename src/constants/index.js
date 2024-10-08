import { contactIcons, footerIcons, profileIcons } from "../assets";

export const whyDetails = [
  {
    id: 1,
    title: "Anonymity",
    text: "Our Anonymous Messaging App comes along with many great features. Here we are going to list some of them. Have a look below.",
  },
  {
    id: 2,
    title: "Easy to Use",
    text: "We are constantly working on Hermes as a platform to make it as user friendly as possible.",
  },
  {
    id: 3,
    title: "24/7 Support",
    text: "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you.",
  },
  {
    id: 4,
    title: "Safe & Secure",
    text: "Safety of our users using this anonymous messaging platform is very important for us.",
  },
];

export const footerLinks = [
  {
    id: 1,
    name: "whatsapp",
    img: footerIcons.whatsapp,
    link: "#",
  },
  {
    id: 2,
    name: "instagram",
    img: footerIcons.instagram,
    link: "#",
  },
  {
    id: 3,
    name: "facebook",
    img: footerIcons.facebook,
    link: "#",
  },
  {
    id: 4,
    name: "youtube",
    img: footerIcons.youtube,
    link: "#",
  },
  {
    id: 5,
    name: "x",
    img: footerIcons.x,
    link: "#",
  },
];

export const landingLinks = [
  { id: 1, name: "Home", path: "/", selected: true },
  { id: 2, name: "Get Started", path: "/login", selected: false },
  { id: 3, name: "Contact Us", path: "/contact", selected: false },
];

export const startLinks = [
  { id: 1, name: "Home", path: "/", selected: false },
  { id: 2, name: "Get Started", path: "/login", selected: true },
  { id: 3, name: "Contact Us", path: "/contact", selected: false },
];

export const contactLinks = [
  { id: 1, name: "Home", path: "/", selected: false },
  { id: 2, name: "Get Started", path: "/login", selected: false },
  { id: 3, name: "Contact Us", path: "/contact", selected: true },
];

export const contactDetails = [
  {
    id: 1,
    name: "Instagram",
    text: "Reach us on Instagram",
    img: contactIcons.instaColour,
    link: "#",
  },
  {
    id: 2,
    name: "X",
    text: "Tweet us at support@hermesanon",
    img: contactIcons.xColour,
    link: "#",
  },
  {
    id: 3,
    name: "Facebook",
    text: "Drop us a message on Facebook",
    img: contactIcons.facebookColour,
    link: "#",
  },
  {
    id: 4,
    name: "mail",
    text: "Send us a mail",
    img: contactIcons.mail,
    link: "#",
  },
];

export const profileLinks = [
  { id: 1, name: "Home", path: "/", selected: false },
  { id: 2, name: "My Profile", path: "/profile", selected: true },
  { id: 3, name: "Contact Us", path: "/contact", selected: false },
];

export const profileDetails = [
  {
    id: 1,
    name: "logo",
    text: "View Your Messages",
    img: profileIcons.logo,
    link: "/messages",
  },
  {
    id: 2,
    name: "whatsapp",
    text: "Share on WhatsApp",
    img: profileIcons.whatsappColour,
    link: "#",
  },
  {
    id: 3,
    name: "instagram",
    text: "Share on Instagram",
    img: profileIcons.instaColour,
  },
  {
    id: 4,
    name: "x",
    text: "Share on X(Twitter)",
    img: profileIcons.xColour,
    link: "#",
  },
  {
    id: 5,
    name: "facebook",
    text: "Share on Facebook",
    img: profileIcons.facebookColour,
    link: "#",
  },
];

// Placeholder Messages
export const messages = [
  {
    id: 1,
    message: "Hey baby how is you?",
    time: "- Anonymous [01-10-2024 21:27 GMT]",
  },
  {
    id: 2,
    message: "Go and die already. I hate you!",
    time: "- Anonymous [01-10-2024 22:19 GMT]",
  },
];
