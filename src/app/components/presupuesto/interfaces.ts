export interface ItemsBudget {
    web: ItemBudget
    seo:ItemBudget
    adds:ItemBudget
  }
  
export interface ItemBudget {
    checked: boolean,
    price: number
  }