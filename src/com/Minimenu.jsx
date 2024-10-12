
import './Minimenu.css'


function Minimenu() { 
    const brands = [
        'Offerte di Halloween', 'Decorazioni', 'Costumi per lei', 'Costumi per lui', 'Costumi di gruppo',
        'Costumi per cani e gatti', 'Articoli per bambini', 'Dolcetti', 'Accessori', 'T-shirt a tema'
      ];
    return(
        <>
     <div className="brand-buttons-container">
      {brands.map((brand, index) => (
        <button key={index} className="brand-button">
          {brand}
        </button>
      ))}
    </div>

        </>
    )
};




export default Minimenu;