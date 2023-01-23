import { Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Purple } from "./logins/purple";


export function Router(){
    return(
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/' element={<Purple/>} /> */}
            <Route path='/purple' element={<Purple/>} />
            <Route path='/event/lesson/:slug' element={''} />
        </Routes>
    )
}