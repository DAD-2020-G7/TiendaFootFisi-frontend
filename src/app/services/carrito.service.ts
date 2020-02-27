import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CarritoService implements OnInit {

    items: any[] = [];
    longitud: number = 0;

    constructor(private http: HttpClient) {
        this.llenarCarrito();
    }

    ngOnInit() {

    }

    llenarCarrito() {
        this.items = [];
        let productos = localStorage.getItem('productos')
        let arrayAux = []
        if (productos != null) {
            arrayAux = productos.split('@');
            for (let i in arrayAux) {
                this.items.push(JSON.parse(arrayAux[i]));
            }
        } else {
            this.items = [];
        }
        this.longitud = this.items.length;
    }

    addToCart(product) {
        this.items.push(product);
        let cadenaProductos = '';
        for (let i = 0; i < this.items.length; i++) {
            i != this.items.length - 1 ?
                cadenaProductos += JSON.stringify(this.items[i]) + '@' :
                cadenaProductos += JSON.stringify(this.items[i]);
        }
        localStorage.setItem('productos', cadenaProductos);
        this.longitud = this.items.length;
    }

    getItems() {
        const productos = localStorage.getItem('productos');
        let arrayAux = [];
        const prueba = [];
        if (productos != null) {
            arrayAux = productos.split('@');
            for (const i in arrayAux) {
                prueba.push(JSON.parse(arrayAux[i]));
            }
            return prueba;
        } else {
            return prueba;
        }
    }

    clearCart() {
        this.items = [].slice();
        this.longitud = 0;
        localStorage.removeItem('productos')
    }

    numeroItems() {
        return this.items.length;
    }

    verificarColocado(item: any) {
        return this.items.includes(item);
    }

    eliminarItem(index: number) {
        let cadenaProductos = ''
        this.items.splice(index, 1)
        localStorage.setItem('productos', '')
        for (let i = 0; i < this.items.length; i++) {
            i !== this.items.length - 1 ?
                cadenaProductos += JSON.stringify(this.items[i]) + '@' :
                cadenaProductos += JSON.stringify(this.items[i])
        }
        cadenaProductos === '' ?
            localStorage.removeItem('productos') :
            localStorage.setItem('productos', cadenaProductos)
        this.longitud--;
    }

    pagarOrden(json) {
        console.log(json);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:8083/api/pedido/registrar', json, { headers })
        //return this.http.post('https://tienda-foot-fisi-backend.herokuapp.com/api/pedido/registrar', json, { headers })
    }


}

