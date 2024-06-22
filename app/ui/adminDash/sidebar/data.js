import { AiOutlineDashboard } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { PiNotepad } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdOutgoingMail } from "react-icons/md";

const data = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    screen: "dashboard",
  },
  {
    name: "Alumni List",
    icon: HiUser,
    screen: "alumniList",
  },
  {
    name: "Gallery",
    icon: GrGallery,
    screen: "gallery",
  },
  {
    name: "Add Event",
    icon: PiNotepad,
    screen: "addEvents",
  },
  {
    name: "Jobs",
    icon: FaUserGraduate,
    screen: "jobs",
  },
  {
    name: "Feedback",
    icon: FaRegMessage,
    screen: "feedback",
  },
  {
    name: "Share Idea",
    icon: IoShareSocialOutline,
    screen: "shareIdea",
  },
  {
    name: "Send Mail",
    icon: MdOutgoingMail,
    screen: "sendMail",
  },
];

export default data;
