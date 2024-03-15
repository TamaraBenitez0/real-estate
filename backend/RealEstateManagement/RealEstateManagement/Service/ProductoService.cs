using Mapster;
using RealEstateManagement.DTO.ProductoDTOS;
using RealEstateManagement.Repository;

namespace RealEstateManagement.Service;

public interface IProductoService
{
    List<ProductoResponseDTO> GetProductos();
    ProductoResponseDTO GetProducto(Guid codigo);
    void CreateProducto(ProductoRequestDTO productoDto);
    int UpdateProducto(Guid codigo,ProductoRequestDTO productoDto);

    void DeleteProducto(Guid codigo);   
}

public class ProductoService(IProductoRepository productoRepository) : IProductoService
{
    public void CreateProducto(ProductoRequestDTO productoDto)
    {
        productoRepository.AddProducto(productoDto.Adapt<ProductoDTO>());
    }

    public void DeleteProducto(Guid codigo)
    {
        productoRepository.RemoveProducto(codigo);
    }

    public ProductoResponseDTO GetProducto(Guid codigo)
    {
        return productoRepository.GetProducto(codigo).Adapt<ProductoResponseDTO>();
    }

    public List<ProductoResponseDTO> GetProductos()
    {
        return productoRepository.GetProductos().Adapt<List<ProductoResponseDTO>>();
    }

    public int UpdateProducto(Guid codigo, ProductoRequestDTO productoDto)
    {
        return productoRepository.UpdateProducto(codigo, productoDto.Adapt<ProductoDTO>());
    }
}
