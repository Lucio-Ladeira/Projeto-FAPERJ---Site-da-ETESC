// Começo dos Imports aqui
import "./Home.css" // Import do CSS
/*
import MenuBar from "../components/navgation/Navgation.tsx" // Import do NAV

import Footer2 from "../components/footer/FooterDemo.tsx" // Import do footer
*/
// Final dos Imports aqui

// Começo da funçã home - HTML
export default function Home1() {
    return (
        <>
        <main className="main-body">
            <div>
                <h1> Seja bem vindo</h1>
            </div>
            <div className="card-container">
                <div className="card">
                    <h1>H1 de Teste</h1>
                    <ul>
                        <li>Teste1</li>
                        <li>Teste2</li>
                        <li>Teste3</li>
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}
// Termino da função home - HTML