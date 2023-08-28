import { Outlet} from "react-router-dom";
import Homepage from "./Homepage";



const NavLinks =  () =>{
    return(
        <div>
            <Homepage/>
            <Outlet/>
        </div>
    )
}



export default NavLinks;