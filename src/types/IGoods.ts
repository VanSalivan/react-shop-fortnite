export interface IGoods {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  full_background?: string;
}

export interface IOrder extends IGoods {
  quantity: number;
}

export interface State {
  goods: IGoods[];
  loading: boolean;
  order: IOrder[];
  isBasketShow: boolean;
  alertName: string;
}
