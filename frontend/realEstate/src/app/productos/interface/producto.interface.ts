export interface Producto{
    codigo: string;
    nombre: string;
    idBarrio: number,
    precio: number | undefined;
    descripcion: string | undefined ;
    urlImagen: string | undefined,
    estadoProducto: number
  }