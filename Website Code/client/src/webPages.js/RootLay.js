import Navigation from "../components.js/Navigation";
import { Outlet } from "react-router-dom";
const RootLay = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>        
    );
}
 
export default RootLay
