import { footerIcons } from "../assets";

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
  { id: 2, name: "Get Started", path: "/createAccount", selected: false },
  { id: 3, name: "Contact Us", path: "/", selected: false },
];

export const startLinks = [
  { id: 1, name: "Home", path: "/", selected: false },
  { id: 2, name: "Get Started", path: "/createAccount", selected: true },
  { id: 3, name: "Contact Us", path: "/", selected: false },
];
