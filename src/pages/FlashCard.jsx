import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopMenu from '../components/TopMenu'
import FlashCardGenerator from '../components/FlashCardGenerator'

const Summarize = ({menuItems}) => {
  return (
      <div className="d-flex">
      {/* Sidebar */}
       <SideNavBar menuItems={menuItems}/>
  {/* Sidebar */}
      {/* Main Content */}
          <div className="flex-grow-1  h-auto p-4">
              <TopMenu menuItems={menuItems}/>
         <div>
                            <FlashCardGenerator/>
                         </div>
      </div>
    </div>
  )
}

export default Summarize