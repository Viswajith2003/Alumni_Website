import { HiUser } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdLaptopChromebook } from "react-icons/md";

const data = [
  {
    icon: HiUser,
    num: 6,
    name: "Total User",
    color: "bg-blue-500",
  },
  {
    icon: RiVerifiedBadgeFill,
    num: 3,
    name: "Verified User",
    color: "bg-green-500",
  },
  {
    icon: IoMdClose,
    num: 3,
    name: "Unverified User",
    color: "bg-red-500",
  },
  {
    icon: MdLaptopChromebook,
    num: 1019,
    name: "Website",
    color: "bg-yellow-500",
  },
];

export default data;
