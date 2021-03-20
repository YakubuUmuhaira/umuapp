import { useState } from "react"
import NavBar from "./components/NavBar";
import './App.css';
import AddTask from "./components/AddTask";
import AllTask from "./components/AllTask";

function App() {
  const [show, setShow] = useState(false)
  // eslint-disable-next-line
  const [task, setTask]= useState([
    {task: "Cooking", 
    time:"Morning" , 
    date:"24th, december 2022", 
    },
    {task: "Shopping", 
    time:"5 pm" , 
    date:"20th, december 2022", 
    },
    {task: "Outing", 
    time:"Morning" , 
    date:"27th, december 2022", 
    },
   
  ])


  const toggle= () => {
      setShow(!show)
  }
  
  return (
    <main>
    <NavBar show={show} toggle={toggle}/>
    {show && <AddTask/>}
    <AllTask task={task}/>
  </main>
  );
}

export default App;
