export interface Presupuesto {
    nombrePresupuesto: string;
    nombreCliente: string;
    totalBudget: number;
    itemsBudget: ItemsBudget;
    webDetails: WebDetails;
    fecha: string;
}


export interface WebDetails {
    pages: number,
    languages: number
}
export interface ItemsBudget {
    web: ItemBudget
    seo: ItemBudget
    ads: ItemBudget
}  
export interface ItemBudget {
    checked: boolean,
    price: number
}