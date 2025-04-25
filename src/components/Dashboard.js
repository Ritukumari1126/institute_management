import { Link, Outlet, useLocation } from 'react-router-dom'

const Dashboard = ()=>{
    const location = useLocation();
    return (
        <div className="dashboard-wrapper">
           
            <div className="side-nav">
              <div className='profile-box' >
                 <img src={require('../assets/pic.jpg')}></img>

                 <div className='profile-text'>
                     <h3>Hello Ritu</h3>
                     <button>Logout</button>
               
                 </div>
              </div>

              <div className='menu'>
                 <Link to='/dashboard/home' className={location.pathname == '/dashboard/home'?'menu-active-link':'menu-link'}><i class="fa-solid fa-house"></i> Home</Link>
                 <Link to='/dashboard/mycourses' className={location.pathname == '/dashboard/mycourses'?'menu-active-link':'menu-link'}><i class="fa-solid fa-book"></i> My Course</Link>
                 <Link to='/dashboard/addcourses' className={location.pathname == '/dashboard/addcourses'?'menu-active-link':'menu-link'}><i class="fa-solid fa-plus"></i> Add Courses</Link>
              
              
              </div>
             
            
            </div>

            <div className="main-content">
            
            <Outlet/>
            
            </div>
           
           
          
          
        </div>

    )
}

export default Dashboard