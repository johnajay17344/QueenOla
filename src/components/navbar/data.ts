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
{ name: "About", href: "#about" },
{ name: "Services", href: "#services" },
{ name: "Contact", href: "#contact" },
]

export const logo: Logo = {
  src: "/logo/logo.jpeg",
  alt: "Queen Ola Logo",
  name: "QUEEN OLA",
};
