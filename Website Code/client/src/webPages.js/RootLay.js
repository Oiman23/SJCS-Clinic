import Navigation from "../components.js/Navigation";
import { Outlet } from "react-router-dom";
const RootLay = () => {
    return (
        <div>
            <header><Navigation/></header>
            <body><Outlet/></body>
            
        </div>        
    );
}
 
export default RootLay
