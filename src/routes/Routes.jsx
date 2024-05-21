import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Feed from '../pages/Feed/Feed'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
import Info from '../pages/Info/Info'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/feed" element={<Feed/>}></Route>
                <Route path="/profile" element={<ComingSoon/>}></Route>
                <Route path="/config" element={<ComingSoon/>}></Route>
                <Route path="/coming-soon" element={<ComingSoon/>}></Route>
                <Route path="/info" element={<Info/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;