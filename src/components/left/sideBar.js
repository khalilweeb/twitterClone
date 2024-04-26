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


import Button from '../../UI/Button';

const sideBar = () => {

    return (
        <nav className={clss.nav}>
           <FaXTwitter className={clss.logo}/> 
           <diV className={clss.items}> <MdHomeFilled  className={clss.icon}/> <h3>Home</h3> </diV>
           <diV className={clss.items}> <IoSearchSharp  className={clss.icon}/> <h3>Explore</h3> </diV>
           <diV className={clss.items}> <IoIosNotifications  className={clss.icon}/> <h3>Notifications</h3> </diV>
           <diV className={clss.items}> <FaEnvelope  className={clss.icon}/> <h3>Messages</h3> </diV>
           <diV className={clss.items}> <IoMdListBox  className={clss.icon}/> <h3>list</h3> </diV>
           <diV className={clss.items}> <PiBookmarkSimpleBold className={clss.icon} /> <h3>bookmarks</h3> </diV>
           <diV className={clss.items}> <MdGroup className={clss.icon} /> <h3>Communities</h3> </diV>
            <diV className={clss.items}> <FaXTwitter  className={clss.icon}/> <h3>Premuime</h3> </diV>
            <diV className={clss.items}> <GoPersonFill  className={clss.icon}/> <h3>Profile</h3> </diV>
            <diV className={clss.items}> <CiCircleMore  className={clss.icon}/> <h3>More</h3> </diV>
            <Button>hello</Button>
        </nav>    
        )

}

export default sideBar;