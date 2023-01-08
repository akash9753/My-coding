import './App.css';
import Index from './html/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import PositionProperty from './html/PositionProperty';
import Web from './html/Web'
import Test from './html/Test';
import General from './html/General';
import Css from './html/Css';
import BoxModel from './html/BoxModel';
import MinMaxWidth from './html/MinMaxWidth';
import ResumeProject from './html/ResumeProject';
import ResumeProjectCN from './html/ResumeProjectCN';
import Flex from './html/Flex';
import PopupUserAccountMenu from "./popupUserAccountMenu/PopupUserAccountMenu";
import Bootstrap from './bootstrap/Bootstrap';
import Project2 from './topgunProject/Project2'
function App() {
  useEffect(() => {
    document.title = "Global Html Css React";
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         {/* <Route path="/" element={<Index />} /> */}
         <Route path="/" element={<Web />} />
         <Route path="/general" element={<General />} />
         <Route path="/test" element={<Test />} />
         <Route path="/css" element={<Css />} />
         <Route path="/position-property" element={<PositionProperty/>} />
         <Route path="/box-model" element={<BoxModel/>} />
         <Route path="/minmaxwidth" element={<MinMaxWidth/>} />
         <Route path="/resumeproject" element={<ResumeProject/>} />
         <Route path="/resumeprojectcn" element={<ResumeProjectCN/>} />
         <Route path="/flex" element={<Flex/>} />
         <Route path="/popupUserAccountMenu" element={<PopupUserAccountMenu/>} />
         <Route path="/bootstrap" element={<Bootstrap/>} />
         <Route path="/project2" element={<Project2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
