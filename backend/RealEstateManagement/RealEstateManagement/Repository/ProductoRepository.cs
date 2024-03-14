using Microsoft.EntityFrameworkCore;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.ProductoDTOS;

namespace RealEstateManagement.Repository
{
    public interface IProductoRepository
    {
        
        List<Producto> GetProductos();
        Producto GetProducto(Guid codigo);
        void AddProducto(ProductoDTO productoDto);

        int UpdateProducto(Guid codigoProducto, ProductoDTO productoDto);

        void RemoveProducto(Guid codigoProducto);
    }
    public class ProductoRepository(AppDbContext context) : IProductoRepository
    {
        public void AddProducto(ProductoDTO productoDto)
        {
            var barrio = context.Barrios.FirstOrDefault(b => b.IdBarrio == productoDto.IdBarrio) ?? throw new Exception ("El barrio especificado no fue encontrado.");
            Producto producto = new Producto
            {

                Nombre = productoDto.Nombre,
                Barrio = barrio,
                Precio = productoDto.Precio,
                Descripcion = productoDto.Descripcion,
                UrlImagen = productoDto.UrlImagen,
                EstadoProducto = Domain.EstadoProducto.Disponible

            };

            barrio.Productos.Add(producto);

            context.Productos.Add(producto);

            context.SaveChanges();
        }

        public Producto GetProducto(Guid codigo)
        {
            var producto = context.Productos.Include(p => p.Barrio).FirstOrDefault(p => p.Codigo == codigo);
            return producto;
        }

        public List<Producto> GetProductos()
        {
            var productos = context.Productos.Include(p => p.Barrio).ToList();
           
            return productos;
        
        }

        public void RemoveProducto(Guid codigoProducto)
        {
            var producto = context.Productos.FirstOrDefault(p => p.Codigo == codigoProducto) ?? throw new Exception($"El producto con codigo {codigoProducto} no existe");
            context.Productos.Remove(producto);

            context.SaveChanges();
        }

        public int UpdateProducto(Guid codigoProducto,ProductoDTO productoDto)
        {
            
            var rowsAffected = context.Productos.Where(x => x.Codigo == codigoProducto).ExecuteUpdate(update =>
                update.SetProperty(entity => entity.Nombre, productoDto.Nombre)
                .SetProperty(entity => entity.Precio, productoDto.Precio)
                .SetProperty(entity => entity.Descripcion, productoDto.Descripcion)
                .SetProperty(entity => entity.UrlImagen, productoDto.UrlImagen)
                .SetProperty(entity => entity.EstadoProducto, productoDto.EstadoProducto));

            return rowsAffected;
        }
    }
}
