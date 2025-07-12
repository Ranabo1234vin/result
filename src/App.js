import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Topbar from './Topbar';
import Login from './Login';
import StudentList from './StudentList';
import Home from "./Home";
import Student from "./Student"
import NewStudent from "./NewStudent";
import img1 from './images/icons8-slader-100.png';
import img2 from "./images/book.png";
import img3 from './images/group.png';
import img4 from './images/exam-results.png';
import img5 from './images/menu.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      <div style={{display:'flex',padding:'0px'}}>
        <div style={{height:"673px",minWidth:'100px',backgroundColor:'#FFF39A',paddingRight:'30px',paddingLeft:'30px',display:'flex',flexDirection:'column',alignItems:"flex-start"}}>
         <div> <h4>DAsh</h4></div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'10px', height:'30px',width:'250px',borderRadius:'10px',backgroundColor:'white'}}>
            <img  alt="image not found" src={img1} height="25px" width="25px"/>
           <Link to="/home"><h5>Dashboard</h5></Link>
          </div>
         <div><h4>APPEARANCE</h4></div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
            <img alt="image not found" src={img1} height="25px" width="25px"/>
            <h4>Student Classes</h4>
          </div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
            <img alt="image not found" src={img2} height="20px" width="20px"/>
            <h4 style={{marginLeft:'5px'}}>Subjects</h4>
          </div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
            <img alt="image not found" src={img3} height="20px" width="20px"/>
           <Link to="/studentlist"><h4 style={{marginLeft:'5px'}}>Students</h4></Link>
          </div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
            <img alt="image not found" src={img4} height="20px" width="20px"/>
            <h4 style={{marginLeft:'5px'}}>Result</h4>
          </div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
            <img alt="image not found" src={img5} height="20px" width="20px"/>
            <h4 style={{marginLeft:'5px'}}>Admin Change Password</h4>
          </div>

        </div>
        <div>
        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path="/studentlist" element={<StudentList/>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path="/student" element={<Student></Student>}/>
          <Route path="/newstudent" element={<NewStudent></NewStudent>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
      </div>
  );
}

export default App;
