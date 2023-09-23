import LaCuma from "../assets/LaCuma.svg"
import LaBana from "../assets/LaBana.svg"
import LaMenta from "../assets/LaMenta.svg"
import {useState} from "react";

export default function Index() {

    const [sabor,setSabor] = useState("")
    const [pizza,setPizza] = useState()

    // Aqui temos as funções cada uma dessas mudará os nossos estados de
    //  imagem e a legenda das pizzas
    const MudarPizzaCuma = () =>{
        setSabor("Cuma")
        setPizza(LaCuma)
    }
    
    const MudarPizzaMenta = () =>{
        setSabor("Menta")
        setPizza(LaMenta)
    }

    const MudarPizzaBana = () =>{
        setSabor("Bana")
        setPizza(LaBana)
    }

  return (
    <main>
      <h2>Escolha seu sabor</h2>

      <div className="caixaMostraPizza">
        <img src={pizza} alt="" />
        <h2>{sabor}</h2>
      </div>

      <section>

        <figure>

          <img src={LaCuma} alt="imagem de pizza" />
          <h3>La Cuma</h3>
          <button onClick={()=> MudarPizzaCuma()}>Comprar agora</button>

        </figure>

        <figure>

          <img src={LaMenta} alt="imagem de pizza" />
          <h3>La Menta</h3>
          <button onClick={()=> MudarPizzaMenta()} >Comprar agora</button>

        </figure>

        <figure>
            
          <img src={LaBana} alt="imagem de pizza" />
          <h3>La Bana</h3>
          <button onClick={()=> MudarPizzaBana()} >Comprar agora</button>

        </figure>
        
      </section>
    </main>
  );
}
