import { Route, Routes } from "react-router-dom";
import { Purple } from "./logins/purple";


export function Router(){
    return(
        <Routes> 
            <Route path='/' element={<Purple/>} />
            <Route path='/purple' element={<Purple/>} />
            <Route path='/event/lesson/:slug' element={''} />
        </Routes>
    )
}