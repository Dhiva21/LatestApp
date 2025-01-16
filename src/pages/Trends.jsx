import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopMenu from '../components/TopMenu'
 import { Trending } from './Trending'
const Trends = ({menuItems}) => {
    return (
      
         <div className="d-flex">
      {/* Sidebar */}
       <SideNavBar menuItems={menuItems}/>
  {/* Sidebar */}
      {/* Main Content */}
            <div className="flex-grow-1  p-4 h-auto">
                <TopMenu menuItems={menuItems}/>
                <div>
                    <Trending/>
                </div>
                
              
      </div>
    </div>
  )
}

export default Trends