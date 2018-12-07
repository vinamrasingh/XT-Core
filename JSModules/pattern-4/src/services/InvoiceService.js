/* import {customer} from '../models/Customer';
import {order} from '../models/Order';
import {product} from '../models/Product'; */// Done using barrel export

import{
    order,product,customer
}from '../Models';
export class InvoiceService{
    getProduct(){
        return product;
    }
    getOrder(){
        return order;
    }
    getCustomer(){
        return customer;
    }
}