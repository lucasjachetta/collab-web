import Home from '../pages/Home/Home'
import Info from '../pages/Info/Info'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/info" element={<Info/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;