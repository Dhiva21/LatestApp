import React from 'react';
import SideNavBar from '../components/SideNavBar';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';

const Layout = ({ menuItems, children }) => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <SideNavBar menuItems={menuItems} />
            
            {/* Main Content */}
            <div className="flex-grow-1 p-4 h-auto">
                <TopMenu menuItems={menuItems} />
                <div>
                    {children}
                </div>
                <div>
                   {/* <Footer/> */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
