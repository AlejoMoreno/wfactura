import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserServiceService } from '../services/user-service.service';

import { ModalController } from '@ionic/angular';
import { SplashPage } from '../splash/splash.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public email: string;
  public first_name: string;
  public last_name: string;
  public mobile: string;
  public address: string;
  public password: string;

  public ventas: any[];

  public item_code: string;
  public item_name: string;
  public order_item_quantity: number;
  public order_item_price: number;
  public order_item_final_amount: number;

  public order_total_before_tax: number;
  public order_tax_per: number;
  public order_total_tax: number;
  public order_total_after_tax: number;

  public direccion: string;
  public currency: string;
  public tipo: string;
  public notas: string;
  public nombre: string;

  public resultadodata: string;


  public productos: any[];

  public login: boolean;

  public total: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              public userService: UserServiceService, public modalController: ModalController) { }

  ngOnInit() {
    try{
      
      this.folder = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.folder);

      
      this.login = true;
      this.total = 100000;
      if(this.folder == "Inbox"){
        this.presentModal();
      }
      else{
        this.getusuarios();
      }
      if(this.folder == "Historial"){        
        this.GetHistorial();
      }
      if(this.folder == "Facturar" || this.folder == "Compras"){        
        this.productos = [];
        this.order_item_price = 0;
        this.order_total_before_tax = 0;
        this.currency = "$";
      }
      if(this.folder == "Facturar"){
        this.tipo = "VENTA";
      }
      else{
        this.tipo = "COMPRA";
      }
    }
    catch(Exception){
      console.log(Exception.toString());
    }
    
    
  }

  getusuarios(){
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    this.email = usuario.email;
    this.first_name = usuario.first_name;
    this.last_name = usuario.last_name;
    this.mobile = usuario.mobile;
    this.address = usuario.address;
    this.password = usuario.password;
  }

  onchangeCantidad() {
    this.TotalProducto();
  }
  onchangePrecio(){
    this.TotalProducto();
  }
  onchangeImpuesto(){
    this.order_total_tax = (this.order_total_before_tax * this.order_tax_per)/100;
    this.order_total_after_tax = this.order_total_tax + this.order_total_before_tax;
  }
  TotalProducto() {
    this.order_item_final_amount = this.order_item_quantity * this.order_item_price;
  }

  AgregarProducto() {
    this.productos.push({
      "item_code": this.item_code,
      "item_name": this.item_name,
      "order_item_quantity": this.order_item_quantity,
      "order_item_price": this.order_item_price,
      "order_item_final_amount": this.order_item_final_amount
    });
    var total = 0;
    this.productos.forEach(function (item) {
      total = total + item.order_item_final_amount;
    });
    this.order_total_before_tax = total;
  }

  GuardarFactura(){
    this.getusuarios();
    this.userService.setFactura(this.email, this.order_total_after_tax, this.order_total_tax, this.order_tax_per, this.order_total_before_tax,
      this.notas, this.tipo, this.currency, this.direccion, this.nombre).subscribe(
        (data) => { // Success
          const resultado = data;
          console.log("RESULTADO VENTAS:",resultado);
          if(resultado['resultado']=="error"){
            alert(resultado['body']['msm']);
          }
          else{
            this.ventas = resultado['body'];
            this.resultadodata = resultado['body']['msm'];
            this.productos.forEach((item) => {
              this.userService.setProductos(resultado['body']['id'], item.order_item_final_amount, item.order_item_price,
              item.order_item_quantity, item.item_name, item.item_code).subscribe(
                (data) => { // Success
                  const resultado = data;
                  console.log(resultado);
                  if(resultado['resultado']=="error"){
                    //alert(resultado['body']['msm']);
                  }
                  else{
                    this.resultadodata = this.resultadodata + resultado['body']['msm'];
                    this.ventas = resultado['body'];
                  }
                },
                (error) =>{
                  console.error(error);
                  alert("error");
                }
              );
            });
          }
          alert(this.resultadodata);
        },
        (error) =>{
          console.error(error);
          alert("error");
        }
      );
      
      
  }

  

  GetHistorial() {
    this.getusuarios();
    this.userService.getHistorial(this.email)
    .subscribe(
      (data) => { // Success
        const resultado = data;
        console.log(resultado);
        if(resultado['resultado']=="error"){
          alert(resultado['body']['msm']);
        }
        else{
          this.ventas = resultado['body'];
        }
      },
      (error) =>{
        console.error(error);
        alert("error");
      }
    ); 
  }

  Login() {
    this.userService.getUsers(this.email,this.password)
    .subscribe(
      (data) => { // Success
        const resultado = data;
        console.log(resultado);
        if(resultado['resultado']=="error"){
          alert(resultado['body']['msm']);
        }
        else{
          localStorage.setItem("usuario",JSON.stringify(resultado['body']));
          this.Onshow('/folder/Perfil');
        }
      },
      (error) =>{
        console.error(error);
        alert("error");
      }
    ); 
  }

  CrearUsuarios() {
    this.login = false;
  }
  LoginUsuarios() {
    this.login = true;
  }

  Setuser() {
    this.getusuarios();
    this.userService.setUser(this.email, this.password, this.first_name, this.last_name, this.mobile, this.address)
    .subscribe(
      (data) => { // Success
        const resultado = data;
        console.log(resultado);
        if(resultado['resultado']=="error"){
          alert(resultado['body']['msm']);
        }
        else{
          localStorage.setItem("usuario",JSON.stringify(resultado['body']));
          this.Onshow('/folder/Perfil');
        }
      },
      (error) =>{
        console.error(error);
        alert("error");
      }
    ); 
  }

  Salir() {
    console.log("Salida del sistema");
    this.Onshow('/folder/Inbox');
  }

  async Onshow(link) {
    try{
      this.presentModal();
      this.router.navigate([link]);
    }
    catch(Exception){
      console.log(Exception.toString());
    }
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SplashPage
    });
    return await modal.present();
  }

}
