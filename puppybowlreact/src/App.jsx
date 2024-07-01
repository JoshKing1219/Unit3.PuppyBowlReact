import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

import './App.css'



function App() {

  return (
    <>
    <div>
      <NavBar/>
      <Routes>
        <Route path = '/' element={<AllPlayers/>} />
        <Route path = '/player/:id' element={<SinglePlayer/>}/>
        <Route path = '/player-form' element={<NewPlayerForm/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
