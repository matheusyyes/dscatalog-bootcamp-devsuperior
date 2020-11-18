import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name:string;
    price:string;
    category:string;
    description:string;
}

type FormEvent =  React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name:'',
        price:'',
        category:'1',
        description:''
    });


    const handledOnChange = (event:FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({...data, [name]:value}));
    }

    const hanledSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const payload ={
            ...formData,
            img_url:'https://i.zst.com.br/images/console-xbox-one-x-1-tb-microsoft-4k-hdr-photo186841451-12-a-15.jpg',
            categories:[{id:formData.category }]
        }

   makeRequest({url:'/products',method:'POST',data: payload})
    }

    return (
        <form onSubmit={hanledSubmit}>
            <BaseForm title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            name="name"
                            type="text" className="form-control mb-5"
                            onChange={handledOnChange}
                            placeholder="Nome do produto"
                        />
                        <select  className="form-control mb-5" onChange={handledOnChange}
                        name="category"
                        >
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletronicos</option>

                        </select>
                        <input
                            type="text" className="form-control"
                            onChange={handledOnChange}
                            placeholder="Preço"
                            name="price"
                        />
                    </div>
                    <div className="col-6">
                        <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handledOnChange}
                        className="form-control"
                        cols={30} 
                        rows={10}>
                        
                        </textarea>
                    </div>
                </div>
            </BaseForm>
        </form>
    )

}

export default Form;