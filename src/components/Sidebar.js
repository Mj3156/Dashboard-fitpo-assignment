import React from 'react'
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className='sidebar'>
          <div className="part1">
                <div className="dashboard">
                    <div className="icon">
                      <i className="ri-settings-line"></i>
                    </div>
                    <div className="heading">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                      
              <div className="menu">
                  <ul className='navlist'>
                      <a href="#" className='active'>
                        <div className="menu-item">
                            <span className="material-symbols-outlined">
                            key
                            </span>
                            <li className='nav-item'>Dashboard </li>
                        </div>
                      </a>
                      <a href="#"className=''>
                        <div className="menu-item">
                            <span className="material-symbols-outlined">
                            key
                            </span>
                            <li className='nav-item'>Product</li>
                        </div>
    
                        <span className='gt'>&gt;</span>                      
                      </a>
                      <a href="#"className=''>
                        <div className="menu-item">
                            <span className="material-symbols-outlined">
                            key
                            </span>
                            <li className='nav-item'>Customers</li>
                        </div>
                        <span className='gt'>&gt;</span>
                      </a>
                      <a href="#"className=''>
                        <div className="menu-item">
                            <span className="material-symbols-outlined">
                            key
                            </span>
                            <li className='nav-item'>Income</li>
                        </div>
                        <span className='gt'>&gt;</span>
                      </a>
                      <a href="#"className=''>
                        <div className="menu-item">
                            <span className="material-symbols-outlined">
                            key
                            </span>
                            <li className='nav-item'>Promote</li>
                        </div>
                        <span className='gt'>&gt;</span>
                      </a>
                      <a href="#"className=''>
                        <div className="menu-item">
                            <span className="material-symbols-outlined">
                            key
                            </span>
                            <li className='nav-item'>Help</li>
                        </div>
                        <span className='gt'>&gt;</span>
                      </a>
                  </ul>
              </div>
          </div>
          <div className="part2">
              <div className="sidebar-bottom-card">
                  <img className='men-img' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1697144302~exp=1697144902~hmac=aded83ab5be835a29e05579733dd43dbc202ce53ec0d285f2c5860299f5baa09" alt="" />
                  <div className='desc'>
                    <h2 className="name">Mehul Jain</h2>
                    <p className="designation">Project manager</p>
                  </div>
                  <span>&#x2304;</span>
              </div>
          </div>
    </div>
  )
}

export default Sidebar