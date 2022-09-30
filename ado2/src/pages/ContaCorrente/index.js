import {Link} from 'react-router-dom';
function ContaCorrente(){
    return(
        <div>
            <h1>Conta Corrente</h1>
            <Link to ='/'>Home</Link><br />
            <Link to ='/financiamento'>Financiamento</Link>
        </div>
    )
}
export default ContaCorrente;