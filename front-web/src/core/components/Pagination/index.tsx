import React from 'react';
import { ReactComponent as Seta } from 'core/assets/images/Seta.svg'
import './styles.scss';
import { generateList } from 'core/utils/list';

type Props ={
    totalPages:number;
    activePage:number;
    onChange:(item:number) =>void;
}

const Pagination = ({totalPages, activePage,onChange}:Props) => {

    const items = generateList(totalPages);
    const previusClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = (activePage + 1) < totalPages ?  'page-active' : 'page-inactive' ;
    return (
        <div className="pagination-container">
            <Seta 
            className={`pagination-previous ${previusClass}`}
             onClick={() => onChange(activePage - 1)} 
             />
            {items.map(item =>
                (<div  key={item} className={`pagination-item ${item === activePage ? 'active' : ''}`}
                
                 onClick={() => onChange(item)}
                 >
                    {item+1}
                </div>))}
            <Seta 
            className={`pagination-next ${nextClass}`}
            onClick={() => onChange(activePage + 1)}
             />
        </div>
    );
}

export default Pagination;