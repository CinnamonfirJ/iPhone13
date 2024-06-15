import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Products", href: "/#product" },
  { label: "Features", href: "/#feature" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const statistics = [
  { value: "1K+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250K+", label: "Customers" },
];

import { phone4, phone5, phone6, phone7 } from "../assets/images";
import {
  camera,
  slowMotion,
  microchip,
  sheild,
  twitter,
  facebook,
  instagram,
} from "../assets/icons";

export const links = [
  { href: "https://x.com/jesse_Cinnamon7?s=09", imgURL: twitter },
  { href: "https://x.com/jesse_Cinnamon7?s=09", imgURL: facebook },
  { href: "https://x.com/jesse_Cinnamon7?s=09", imgURL: instagram },
];

export const products = [
  {
    id: 0,
    name: "iPhone 13 Pro",
    color: "Sierra Blue",
    price: "$499",
    dur: 1000,
    imgURL: phone4,
  },
  {
    id: 1,
    name: "iPhone 13 Pro",
    color: "Graphite",
    price: "$399",
    dur: 1500,
    imgURL: phone5,
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    color: "Gold",
    price: "$325",
    dur: 2000,
    imgURL: phone6,
  },
  {
    id: 3,
    name: "iPhone 13 Pro",
    color: "Silver",
    price: "$297",
    dur: 2500,
    imgURL: phone7,
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: camera,
    text: "Pro Camera System",
    description:
      "Capture moments like a pro with the iPhone 13 Pro’s advanced camera setup, this triple-lens system delivers exceptional image quality.",
  },
  {
    icon: microchip,
    text: "A 15 Bionic Chip",
    description:
      "Under the hood, the iPhone 13 Pro houses the powerful A15 Bionic chip. It’s not just fast; it’s intelligent.",
  },
  {
    icon: slowMotion,
    text: "ProMotion Display",
    description:
      "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display with ProMotion technology.",
  },
  {
    icon: sheild,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: sheild,
    text: "Ceramic Shield",
    description:
      "Worried about accidental drops? The iPhone 13 Pro’s front cover is made of Ceramic Shield, making it tougher than ever. It’s scratch-resistant, drop resistant, and ready for everyday adventures.",
  },
];

export const resourcesLinks = [
  { href: "/", text: "Getting Started" },
  { href: "/", text: "Documentation" },
  { href: "/", text: "Tutorials" },
  { href: "/", text: "API Reference" },
  { href: "/", text: "Community Forums" },
];

export const platformLinks = [
  { href: "/", text: "Features" },
  { href: "/", text: "Supported Devices" },
  { href: "/", text: "System Requirements" },
  { href: "/", text: "Downloads" },
  { href: "/", text: "Release Notes" },
];

export const communityLinks = [
  { href: "/", text: "Events" },
  { href: "/", text: "Meetups" },
  { href: "/", text: "Conferences" },
  { href: "/", text: "Hackathons" },
  { href: "/", text: "Jobs" },
];
