import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Quiz from './components/Layout/Quiz/Quiz';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Layout/>}/>
                <Route path={"/:id"} element={<Quiz/>}/>
                <Route path={"*"} element={<Layout/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;

