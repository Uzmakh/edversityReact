import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Setting from "./pages/Setting";
import Followers from "./pages/Followers";
import Followings from "./pages/Followings";

import "./App.css";
function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Auth />} />
            <Route path=":id" element={<Home />} />
            <Route path="/home">
               <Route index element={<Home />} />
               <Route path="followings" element={<Followings />} />
               <Route path="followers" element={<Followers />} />
            </Route>
      
      <Route path="/setting" element={<Setting/>} />
         </Routes>

      </>
   );
}

export default App;
