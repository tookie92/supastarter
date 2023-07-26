'use client'
import React, { useState } from 'react'
import { SidebarNav } from './SidebarNav';
import { FaAddressBook } from 'react-icons/fa';

const sidebarNavItems = [
  {
    title: "profile",
    href: "/welcome",
    icon:<FaAddressBook/>
  }
]

function SidebarNavDesign() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-200 w-64 p-4 transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar content */}
        {/* Add your sidebar content here */}
        <SidebarNav items={sidebarNavItems}/>
      </aside>
    </>
  );
}

export default SidebarNavDesign