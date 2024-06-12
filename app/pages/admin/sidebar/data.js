import { AiOutlineDashboard } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { PiNotepad } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdOutgoingMail } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const data = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    path: "/dashboard",
  },
  {
    name: "Alumni List",
    icon: HiUser,
    path: "/alumni-list",
  },
  {
    name: "Gallery",
    icon: GrGallery,
    path: "/components/adminGallary",
  },
  {
    name: "Add Event",
    icon: PiNotepad,
    path: "/add-event",
  },
  {
    name: "Jobs",
    icon: FaUserGraduate,
    path: "/jobs",
  },
  {
    name: "Feedback",
    icon: FaRegMessage,
    path: "/feedback",
  },
  {
    name: "Share Idea",
    icon: IoShareSocialOutline,
    path: "/share-idea",
  },
  {
    name: "Send Mail",
    icon: MdOutgoingMail,
    path: "/send-mail",
  },
  {
    name: "LogOut",
    icon: IoLogOutOutline,
    path: "/logout",
  },
];

export default data;


