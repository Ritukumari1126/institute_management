import { Link } from 'react-router-dom'

const Dashboard = ()=>{
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
                 <Link className='menu-link'>Home</Link>
                 <Link className='menu-link'>My Course</Link>
                 <Link className='menu-link'>My videos</Link>
              
              
              </div>
             
            
            </div>

            <div className="main-content">
            <p>main content</p>
            
            </div>
           
           
          
          
        </div>

    )
}

export default Dashboard