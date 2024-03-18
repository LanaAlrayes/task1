import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import photo from "./../../public/banner-01.jpg"
import photo1 from "./../../public/banner-02.jpg"
import photo2 from "./../../public/banner-03.jpg"
import photo3 from "./../../public/property-01.jpg"
import photo4 from "./../../public/property-02.jpg"
import photo5 from "./../../public/property-03.jpg"
import photo6 from "./../../public/property-04.jpg"
import photo7 from "./../../public/property-05.jpg"
import photo8 from "./../../public/property-06.jpg"
import photo9 from "./../../public/phone-icon.png"
import photo10 from "./../../public/email-icon.png"

export const IconData = [
  { icon: <FaFacebook /> },
  { icon: <FaTwitter /> },
  { icon: <FaLinkedin /> },
  { icon: <FaInstagram /> },
];

export const NavData = [
  { desc: "Home" },
  { desc: "Properties" },
  { desc: "Property Details" },
  { desc: "Contact Us" },
];

export const HeroData = [
  {
    img: photo,
    text: "Toronto, ",
    text1: "Canada",
    desc: "Hurry!",
    desc1: "Get the Best",
    desc2: "Villa for",
    desc3: "you",
  },
  {
    img:  photo1,
    text: "Melbourne, ",
    text1: "Australia",
    desc: "Be Quick!",
    desc1: "Get the best",
    desc2: "villa in",
    desc3: "town",
  },
  {
    img: photo2,
    text: "Miami, ",
    text1: "South Florida",
    desc: "Act Now!",
    desc1: "Get the",
    desc2: "highest level",
    desc3: "penthouse",
  },
];

export const ViewData = [
  { title: "43", sub: "Buildings Finished now" },
  { title: "12", sub: "Years Experience" },
  { title: "24", sub: "Awwards Won 2023" },
];

export const PropertyData = [
  {
    img: photo3,
    title: "Luxury Villa",
    price: "$2.264.000",
    subtitle: "18 New Street Miami, OR 97219",
    number: "8",
    number1: "8",
    number2: "545m2",
    number3: "3",
    number4: "6 sport",
  },
  {
    img: photo4,
    title: "Luxury Villa",
    price: "$1.180.000",
    subtitle: "54 Mid Street Florida, OR 27001",
    number: "6",
    number1: "5",
    number2: "450m2",
    number3: "3",
    number4: "8 sport",
  },
  {
    img: photo5,
    title: "Luxury Villa",
    price: "$1460.000",
    subtitle: "26 Old Street Miami, OR 38540",
    number: "5",
    number1: "4",
    number2: "225m2",
    number3: "3",
    number4: "10 sport",
  },
  {
    img: photo6,
    title: "Luxury Villa",
    price: "$584.500",
    subtitle: "12 New Street Miami, OR 12650",
    number: "4",
    number1: "3",
    number2: "125m2",
    number3: "25th",
    number4: "2 cars",
  },
  {
    img: photo7,
    title: "Luxury Villa",
    price: "$925.600",
    subtitle: "34 Beach Street Miami, OR 42680",
    number: "4",
    number1: "4",
    number2: "180m2",
    number3: "3th",
    number4: "2 cars",
  },
  {
    img: photo8,
    title: "Luxury Villa",
    price: "$450.000",
    subtitle: "22 New Street Portland, OR 16540",
    number: "3",
    number1: "2",
    number2: "165m2",
    number3: "26th",
    number4: "3 cars",
  },
];
export const ContactData = [
  { img: photo9, title: "010-020-0340", sub: "Phone Number" },
  {
    img: photo10,
    title: "info@villa.co",
    sub: "Business Email",
  },
];
