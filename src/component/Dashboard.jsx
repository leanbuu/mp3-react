import Profile from './Profile';
import Setting from './Setting';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Dashboard(){
    return(
    <div>
    <nav>
          <ul>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Setting">Setting</Link></li>

            
          </ul>
        </nav>

        {/* Định nghĩa các route */}
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Setting" element={<Setting />} />

        </Routes>
    </div>
    )
}
export default Dashboard