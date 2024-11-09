import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Blogs from "./Components/Blogs"
import Nav from "./Components/Nav"
import { useState } from 'react';
import { MyContext } from './Components/MyContext';



function App() {
  const [isopen,setisopen] = useState(false)

  return (
    <>

<MyContext.Provider value={{isopen , setisopen}}>
      <Router>
        <Nav />
     
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
     
      </Router>
      </MyContext.Provider>
    


    </>
  )
}

export default App
