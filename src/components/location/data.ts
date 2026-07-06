import type { ComponentType } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaClock,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

interface LocationItem {
  icon: ComponentType<{ size?: number }>;
  details: string;
  description: string;
}

interface LocationProp {
  heading: string;
  title: string;
  subHeading: string;
  locationData: LocationItem[];
}

export const location: LocationProp = {
  heading: "Contact & Location",
  title: "Come find your crown.",
  subHeading:
    "Walk-ins welcome, but appointments get priority seating and shorter waits.",

  locationData: [
    {
      icon: FaLocationDot,
      details: "Studio Address",
      description: "123 Beauty Avenue, Lagos",
    },
    {
      icon: FaPhone,
      details: "Phone & WhatsApp",
      description: "+234 800 123 4567", 
    },
    {
      icon: FaClock,
      details: "Opening Hours",
      description: "Mon - Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: FaTiktok,
      details: "TikTok",
      description: "@queenolabeauty",
    },
    {
      icon: FaInstagram,
      details: "Instagram",
      description: "@queenolabeauty",
    },
  ],
};