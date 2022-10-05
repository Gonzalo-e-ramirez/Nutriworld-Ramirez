import React from "react";
import '../style/Footer.css';

const Footer = () =>{

    return(
        <div className="main">
            <div className="conteiner">
                <div className="row">
                    <div className="col">
                        <h4>NutriWorld</h4>
                        <div className="list-unstyled">
                            <p>Buenos Aires, Argentina</p>
                            <p>Tel: 113324232</p>
                            <p>AV. Siempre viva 234</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="final">
                        &copy;{new Date().getFullYear()} NutriWorld | Todos los derechos reservados | Gonzalo Ramirez
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Footer