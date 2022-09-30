import {Link} from 'react-router-dom';
function Home(){
    return(
        <div><h1>Página Inicial</h1>
            <Link to ='/cadastro'>Cadastro</Link><br/>
            <Link to ='/conta'>Conta Corrente</Link><br />
            <Link to ='/financiamento'>Financiamento</Link><br />
        </div>
    );
}
export default Home;