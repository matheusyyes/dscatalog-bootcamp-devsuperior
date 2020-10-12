export type ProductsResponde ={
    content:Product[];
    totalPages:number;
}

export type Product = {
    id:number;
    name:string;
    description:string;
    price:string;
    imgUrl:string;
    date:string;
    categories:Category[];
}

export type Category= {
    id:number;
    name:string;
}