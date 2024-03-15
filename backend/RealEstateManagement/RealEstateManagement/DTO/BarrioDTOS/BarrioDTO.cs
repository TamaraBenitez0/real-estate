namespace RealEstateManagement.DTO.BarrioDTOS
{
    public class BarrioDTO
    {
        public int IdBarrio { get; set; }


        public required string Nombre { get; set; }
    }

    public class BarrioResponseDTO
    {
        public int IdBarrio { get; set; }


        public required string Nombre { get; set; }

    }

    public class BarrioRequestDTO
    {
        public required string Nombre { get; set; }
    }
}
