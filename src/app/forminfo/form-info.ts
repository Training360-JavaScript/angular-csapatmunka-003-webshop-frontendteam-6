import { ICategory } from './../service/config.service';
import { Product } from './../model/product';
export class FormInfo {

  constructor(
    public key: keyof Product,
    public type: string,
    public text: String,
    public  i: number,
    public options?: ICategory[]
  ) { }
}
