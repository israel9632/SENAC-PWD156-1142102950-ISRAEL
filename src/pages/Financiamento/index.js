import {Link} from 'react-router-dom';
function Financiamento(){
    return(
        <div>
            <h1>Financiamento</h1>
            <Link to ='/'>Home</Link><br />
            <Link to ='/conta'>Conta Corrente</Link><br />
        </div>
    );
}
export default Financiamento;