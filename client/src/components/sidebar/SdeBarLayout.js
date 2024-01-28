import React from 'react'
import '../StyleSheet/sideBarLayout.css'
const SideBarLayout = ({Icon,text}) =>{
     return(
         <div className='SideBar__Layout'>
             <Icon/>
             <h4 className='SideBar__layoutText'>{text}</h4>
         </div>
     )
}
export default SideBarLayout