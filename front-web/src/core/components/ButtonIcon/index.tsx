import React from 'react';
import './styles.scss'
import { ReactComponent as Seta } from '../../assets/images/Seta.svg'

type Props = {
    text:string;
}

const ButtonIcon = ({text}:Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-icon">
            <h5>{text}</h5>

        </button>
        <div className="btn-icon-content">
           
                <Seta></Seta>
            
        </div>
    </div>
);

export default ButtonIcon;