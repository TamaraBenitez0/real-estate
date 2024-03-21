namespace RealEstateManagement.DTO.UsuarioDTOS
{
    public class UsuarioDTO
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class UsuarioRegisterDto : UsuarioDTO
    {
        public string Role { get; set; } = string.Empty;
    }
}
