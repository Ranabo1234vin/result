import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from './images/settings.png';
import { Link } from 'react-router-dom';
import img1 from "./images/globe.png";
import img2 from "./images/bell.png";

function Topbar()
{
    return  <Navbar className="bg-body-tertiary">
           <Container style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex"}}>
              
            <div style={{marginLeft:"50px",textDecoration:"none"}}><h1>Admin</h1></div>
             </div>
             
             <div style={{display:"flex", width:"200px", justifyContent:"space-around",alignItems:"center"}}>

              <img src={img2} height="30px" width="30px"/>
               <img src={img1} height="30px" width="30px"/>
               <img src={img} height="34px" width="34px"/>
                   
                
             </div>
           </Container>
         </Navbar>

}
export default Topbar;