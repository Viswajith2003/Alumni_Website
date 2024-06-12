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
  },
  {
    name: "Alumni List",
    icon: HiUser,
  },
  {
    name: "Gallery",
    icon: GrGallery,
  },
  {
    name: "Add Event",
    icon: PiNotepad,
  },
  {
    name: "Jobs",
    icon: FaUserGraduate,
  },
  {
    name: "Feedback",
    icon: FaRegMessage,
  },

  {
    name: "Share Idea",
    icon: IoShareSocialOutline,
  },

  {
    name: "Send Mail",
    icon: MdOutgoingMail,
  },
  {
    name: "LogOut",
    icon: IoLogOutOutline,
  },
];

export default data;
