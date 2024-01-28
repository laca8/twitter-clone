import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import ExplicitIcon from '@material-ui/icons/Explicit';
import NotificationIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HomeIcon from '@material-ui/icons/Home'
import SideBarLayout from './SdeBarLayout'
import '../StyleSheet/SideBar.css'
const SideBar = () =>{
    return (
        <div className='SideBar__container'>
              <div className='SideBar__HomeIcon'>
                  <TwitterIcon className='SideBar__twiterIcon'/>
              </div>
              <div className='SideBar'>
                  <SideBarLayout Icon={HomeIcon} text={`Home`}/>
                  <SideBarLayout Icon={ExplicitIcon} text={`Explor`}/>
                  <SideBarLayout Icon={NotificationIcon} text={`Notification`}/>
                  <SideBarLayout Icon={EmailIcon} text={`Message`}/>
                  <SideBarLayout Icon={BookmarkBorderIcon} text={`Bookmark`}/>
                  <SideBarLayout Icon={ReceiptIcon} text={`List`}/>
                  <SideBarLayout Icon={PersonIcon} text={`Profile`}/>
                  <SideBarLayout Icon={MoreHorizIcon} text={`More`}/>
              </div>
        </div>
    )
}
export default SideBar