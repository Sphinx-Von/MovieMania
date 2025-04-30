
import './css/App.css'
import Favorites from './pages/Favorites';
import Temp from "./pages/Temp";
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';
function App() {
 
return(
  <MovieProvider>
    <NavBar />
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Temp />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </main>
  </MovieProvider>
)
 
}

export default App
