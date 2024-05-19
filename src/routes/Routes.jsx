import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;