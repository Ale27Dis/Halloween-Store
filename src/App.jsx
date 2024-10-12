import './App.css'
import './com/Nav'
import Nav from './com/Nav'
import './com/Minimenu'
import Minimenu from './com/Minimenu'
import './com/Cards'
import Cards from './com/Cards'

function App() {
  

  return (
    <>
    <Nav></Nav>
    
    <Minimenu></Minimenu>
    
    
    {/* <Cards></Cards> */}
  
    <div className="App">
      <Cards 
        title="Mantello per costume di Halloween" 
        image="https://m.media-amazon.com/images/I/61A7xRl-tRL._AC_UL480_QL65_.jpg" 
        price="7.00" 
      />
      <Cards 
        title="10 Pezzi Formine Biscotti" 
        image="https://m.media-amazon.com/images/I/716k38nykHL._AC_UL480_QL65_.jpg" 
        price="6.99" 
      />
      <Cards 
        title="Disnnie Abito Nero per Ragazza" 
        image="https://m.media-amazon.com/images/I/51j5YcSeWSL._AC_UL480_QL65_.jpg" 
        price="23.99" 
      />
      <Cards 
        title="SMARTIES, 24 tubi" 
        image="https://m.media-amazon.com/images/I/71QhEzpeZJL._AC_UL480_QL65_.jpg" 
        price="16.99" 
      />
      <Cards 
        title="Sea Hare Faraone Egizio" 
        image="https://m.media-amazon.com/images/I/61wZnat5NFL._AC_UL480_QL65_.jpg" 
        price="28.99" 
      />
      <Cards 
        title="Costume da Zucca per Bambini" 
        image="https://m.media-amazon.com/images/I/61wwxvo3phL._AC_UL480_QL65_.jpg" 
        price="8.99" 
      />
      <Cards 
        title="Confezione da 3 decorazioni horror" 
        image="https://m.media-amazon.com/images/I/810isKsyNcL._AC_UL480_QL65_.jpg" 
        price="12.99" 
      />
      <Cards 
        title="Stampo per Cioccolatini Wecabe" 
        image="https://m.media-amazon.com/images/I/71rlcjJjbsS._AC_UL480_QL65_.jpg" 
        price="12.99" 
      />
      <Cards 
        title="5 Coppie di calzini" 
        image="https://m.media-amazon.com/images/I/71Mbj7q7k-L._AC_UL480_QL65_.jpg" 
        price="11.99" 
      />
      <Cards 
        title="Statuetta Meneies" 
        image="https://m.media-amazon.com/images/I/519TK5c0YpL._AC_UL480_QL65_.jpg" 
        price="11.99" 
      />
      <Cards 
        title="Decorazione Torta, 50 pezzi" 
        image="https://m.media-amazon.com/images/I/813Q9YdAwkL._AC_UL480_QL65_.jpg" 
        price="8.99" 
      />
      <Cards 
        title="Anelli da Tovagliolo di Zucca" 
        image="https://m.media-amazon.com/images/I/81RjDv8BRBL._AC_UL480_QL65_.jpg" 
        price="7.99" 
      />
      <Cards 
        title="Sacchetti per Caramelle" 
        image="https://m.media-amazon.com/images/I/71+3UmMA1PL._AC_UL480_QL65_.jpg" 
        price="11.99" 
      />
      <Cards 
        title="Teschio Adesivo" 
        image="https://m.media-amazon.com/images/I/617fwlZtF0L._AC_UL480_QL65_.jpg" 
        price="7.99" 
      />
      <Cards 
        title="Decorazioni per Porta Casa" 
        image="https://m.media-amazon.com/images/I/71Dt1UBCEoL._AC_UL480_QL65_.jpg" 
        price="9.99" 
      />
      <Cards 
        title="Abiti flapper anni '20 per donna" 
        image="https://m.media-amazon.com/images/I/71VR3JyoYIL._AC_UL480_QL65_.jpg" 
        price="28.99" 
      />
      <Cards 
        title="Calderone della Strega" 
        image="https://m.media-amazon.com/images/I/81iu0yvLTRL._AC_UL480_QL65_.jpg" 
        price="24.99" 
      />
      <Cards 
        title="Mantello Nero da Vampiro Uomo-Donna " 
        image="https://m.media-amazon.com/images/I/51Js+ZuG20L._AC_UL480_QL65_.jpg" 
        price="14.99" 
      />
      <Cards 
        title="Tatuaggi per Bambini 10 fogli Fluorescenti" 
        image="https://m.media-amazon.com/images/I/61gX0TtasvL._AC_UL480_QL65_.jpg" 
        price="8.99" 
      />
      <Cards 
        title="Tovaglioli a tema Halloween 33 x 33 cm" 
        image="https://m.media-amazon.com/images/I/61avCXOpx7L._AC_UL480_QL65_.jpg" 
        price="2.99" 
      />
      <Cards 
        title="Decorazioni Adesivo Porta Interna" 
        image="https://m.media-amazon.com/images/I/81qlcuixcUL._AC_UL480_QL65_.jpg" 
        price="8.99" 
      />
      <Cards 
        title="Fodere per Cuscini da Incubo, 4 pezzi" 
        image="https://m.media-amazon.com/images/I/812vKNNh90L._AC_UL480_QL65_.jpg" 
        price="18.99" 
      />
    </div>



      
      <p className="read-the-docs">
             Sei pronto per il prossimo Halloween?
      <br /> Immergiti in un fantastico mondo spettrale.
      </p>
      <div>
           
            <p>Email: info@HalloweenGhost.com</p>
            <p>Telefono: +39 06 136446345678</p>
        </div>
    <div >
      <p className="final-thought">
       Grazie per aver visitato la nostra pagina spettrale! <br />
       Speriamo che tu abbia trovato in
       teressante il nostri contenuti. <br />
       Seguici per ulteriori aggiornamenti e contenuti esclusivi!
      </p>
      <div id="my-bar"></div>
      </div>
     
     
    </>
  )
}

export default App
