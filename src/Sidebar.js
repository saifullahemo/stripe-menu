import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar}= useGlobalContext()  

  return (
  <aside className={`${
    isSidebarOpen ? 'sidebar-wrapper show': 'sidebar-wrapper' // if isSidebaropen is true then show sidebar else  
    }`}>
      <div className="sidebar">
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item,index)=> { //accessing the sublinks arrays item
            const {links,page} = item; //looking for the links, page in array
            return(
              <article key = {index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index)=>{
                    const {url, icon, label} = link;

                    return(
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>

              </article>
            )
          })}
        </div>
      </div>

  </aside>
    )
}

export default Sidebar
