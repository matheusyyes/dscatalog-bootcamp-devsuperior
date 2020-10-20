import React from 'react';
import {useHistory} from 'react-router-dom'

const List = () =>{
    const history = useHistory();
    const handledCreate = () =>{
       history.push('/admin/products/create')
    }

    return(
        <div className="admin-product-list">
            <button className="btn btn-primary btn-lg" onClick={handledCreate}>
                Adicionar
            </button>
        </div>
    )

}

export default List;