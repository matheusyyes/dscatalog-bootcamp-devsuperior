import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as MainImage} from '../../core/assets/images/Desenho.svg';
import ButtonIcon from "../../core/components/ButtonIcon";
import './styles.scss';


const Home = () => (
    <div className="home-container">
        <div className="row home-content card-base border-radios-20">
            <div className="col-lg-6 home-text col-sm-12">
            <h1 className="text-title">Conheça o melhor<br/>
             catálogo de produtos</h1>
             <p className="text-subtitle">
             Ajudaremos você a encontrar os melhores <br /> produtos disponíveis no mercado.
             </p>
             <Link to="/products">
             <ButtonIcon text="Inicie agora a sua busca"/>
             </Link>
            </div>
            <div className="col-lg-6 col-sm-12">
               <MainImage className="main-image "/>
            </div>
        </div>
    </div>
)

export default Home;