import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers(email, password) {
    const url = 'https://wakusoft.com/appropias/David/factura_electronica/FACTURA%20ELECTRONICA/api.php?controller=login&email='+email+'&password='+password;
    console.log(url);
    return this.http.get(url);
  }

  setUser(email, password, first_name, last_name, mobile, address){
    const url = 'https://wakusoft.com/appropias/David/factura_electronica/FACTURA%20ELECTRONICA/api.php?controller=registrarusuario&email='+email+'&password='+password+'&first_name='+first_name+'&last_name='+last_name+'&mobile='+mobile+'&address='+address;
    console.log(url);
    return this.http.get(url);
  }

  getHistorial(email){
    const url = 'https://wakusoft.com/appropias/David/factura_electronica/FACTURA%20ELECTRONICA/api.php?controller=getHistorial&email='+email;
    console.log(url);
    return this.http.get(url);
  }

  setFactura(email, order_total_after_tax, order_total_tax, order_tax_per, order_total_before_tax,
    notas, tipo, currency, direccion, nombre){
      
      notas = (notas=="")?"NA":notas;
      let datos = { 
        'email':email , 'order_total_after_tax':order_total_after_tax, 
        'order_total_tax':order_total_tax, 'order_tax_per':order_tax_per, 
        'order_total_before_tax':order_total_before_tax,
        'notas':notas, 'tipo':tipo, 'currency':currency, 'direccion':direccion, 'nombre':nombre
      }
      console.log(datos);
      const url = "https://wakusoft.com/appropias/David/factura_electronica/FACTURA%20ELECTRONICA/api.php?controller=setFactura";
      console.log(url);
      return this.http.post(url,JSON.stringify(datos));
  }
  
  setProductos(idfactura, order_item_final_amount, order_item_price, order_item_quantity,
    item_name, item_code){
      let datos = { 
        'idfactura':idfactura , 'order_item_final_amount':order_item_final_amount, 
        'order_item_price':order_item_price, 'order_item_quantity':order_item_quantity, 
        'item_name':item_name,
        'item_code':item_code
      }
      
      const url = "https://wakusoft.com/appropias/David/factura_electronica/FACTURA%20ELECTRONICA/api.php?controller=setProducto";
      console.log(url);
      return this.http.post(url,JSON.stringify(datos));
  }

}
