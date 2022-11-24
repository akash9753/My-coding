import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"
import ViewUser from "./components/ViewUser"
import HandsOnTable1 from "./components/HandsOnTable1"
import HandsOnTable2 from "./components/HandsOnTable2"
import HandsOnTable3 from "./components/HandsOnTable3"
import Block from "./components/Block"
function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/add-user" element={<AddUser/>}/>
      <Route exact path="/edit-user/:id" element={<EditUser/>}/>
      <Route exact path="/view-user/:id" element={<ViewUser/>}/>
      <Route exact path="/hands-on-table1" element={<HandsOnTable1/>}/>
      <Route exact path="/hands-on-table2" element={<HandsOnTable2/>}/>
      <Route exact path="/hands-on-table3" element={<HandsOnTable3/>}/>
      <Route exact path="/blockly" element={<Block/>}/>
      </Routes>
    </>
  );
}

export default App;
