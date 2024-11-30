
import {Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { Result } from './pages/Result';
import Navbar from "./components/Navbar";
import BuyCreadit from "./pages/BuyCreadit";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/buy" element={<BuyCreadit/>}></Route>
      </Routes>

    </div>
  )
}

export default App