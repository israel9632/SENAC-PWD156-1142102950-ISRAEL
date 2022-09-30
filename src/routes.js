import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import ContaCorrente from "./pages/ContaCorrente";
import Financiamento from "./pages/Financiamento";
import Home from "./pages/Home";
function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/conta' element={<ContaCorrente/>}/>
                <Route path='/financiamento' element={<Financiamento/>}/>
            </Routes>
        </BrowserRouter> 
    )
}
export default RoutesApp;