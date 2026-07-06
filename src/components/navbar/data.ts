interface NavbarItem {
  name: string;
  href: string;
}
interface Logo {
    src: string;
    alt: string;
    name: string;
}
interface whatsappButtonProps {
    phoneNumber: string;
    message: string;
}

export const whatsappButtonData: whatsappButtonProps = {
    phoneNumber: "+2348036268791",
    message: "Hello, i would love to make enquiry about your services. Please get back to me as soon as possible. Thank you.",
};


export const navbarItems: NavbarItem[] = [
  { name: "Home", href: "/" },
  { name: "catalogue", href: "#catalogue" },   // real route now, not a hash
  { name: "Services", href: "#services" },     // hash sections only exist on "/"
  { name: "Contact", href: "#contact" },       // so prefix with "/" to get back there first
];

export const logo: Logo = {
    src: "/images/queenola.png", 
  alt: "Queen Ola Logo",
  name: "QUEEN OLA",
};
