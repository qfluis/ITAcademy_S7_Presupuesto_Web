export interface ItemsBudget {
    web: ItemBudget
    seo:ItemBudget
    ads:ItemBudget
  }
  
export interface ItemBudget {
    checked: boolean,
    price: number
  }