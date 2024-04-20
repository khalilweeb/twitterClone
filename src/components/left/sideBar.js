import clss from './sideBar.module.css';
import { MdHomeFilled } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { MdGroup } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci";









import { FaXTwitter } from "react-icons/fa6";

const sideBar = () => {

    return (
        <nav className={clss.nav}>
           <FaXTwitter className={clss.icon}/> 
           <diV className={clss.items}> <MdHomeFilled /> <h3>Home</h3> </diV>
           <diV className={clss.items}> <IoSearchSharp /> <h3>Explore</h3> </diV>
           <diV className={clss.items}> <IoIosNotifications /> <h3>Notifications</h3> </diV>
           <diV className={clss.items}> <FaEnvelope /> <h3>Messages</h3> </diV>
           <diV className={clss.items}> <IoMdListBox /> <h3>list</h3> </diV>
           <diV className={clss.items}> <PiBookmarkSimpleBold /> <h3>bookmarks</h3> </diV>
           <diV className={clss.items}> <MdGroup /> <h3>Communities</h3> </diV>
            <diV className={clss.items}> <FaXTwitter /> <h3>Premuime</h3> </diV>
            <diV className={clss.items}> <GoPersonFill /> <h3>Profile</h3> </diV>
            <diV className={clss.items}> <CiCircleMore /> <h3>More</h3> </diV>
        </nav>    
        )

}

export default sideBar;