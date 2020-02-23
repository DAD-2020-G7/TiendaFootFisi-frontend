export interface Producto{
    idProducto?:number;
    
    idCategoria?:number;
	sMarca?:string;
	sGenero?:string;
	sTipo?:string;

	lTallas?:any [];

	sNombre?:string;
	sDescripcion?:string;
	nPrecioUnitario?:number;
	nCantidad?:number;
	sFoto?:string;
}