using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RealEstateManagement.Database.Migrations
{
    /// <inheritdoc />
    public partial class MigracionFinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Barrio",
                columns: table => new
                {
                    IdBarrio = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombre = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Barrio", x => x.IdBarrio);
                });

            migrationBuilder.CreateTable(
                name: "Rol",
                columns: table => new
                {
                    IdRol = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rol", x => x.IdRol);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "BLOB", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "BLOB", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.IdUsuario);
                });

            migrationBuilder.CreateTable(
                name: "Producto",
                columns: table => new
                {
                    Codigo = table.Column<Guid>(type: "TEXT", nullable: false),
                    Nombre = table.Column<string>(type: "TEXT", maxLength: 30, nullable: false),
                    IdBarrio = table.Column<int>(type: "INTEGER", nullable: false),
                    Precio = table.Column<decimal>(type: "TEXT", nullable: false),
                    Descripcion = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    UrlImagen = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    EstadoProducto = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Producto", x => x.Codigo);
                    table.ForeignKey(
                        name: "FK_Producto_Barrio_IdBarrio",
                        column: x => x.IdBarrio,
                        principalTable: "Barrio",
                        principalColumn: "IdBarrio",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reserva",
                columns: table => new
                {
                    IdReserva = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NombreCliente = table.Column<string>(type: "TEXT", nullable: false),
                    EstadoReserva = table.Column<int>(type: "INTEGER", nullable: false),
                    CodigoProducto = table.Column<Guid>(type: "TEXT", nullable: false),
                    IdUsuario = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserva", x => x.IdReserva);
                    table.ForeignKey(
                        name: "FK_Reserva_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RolUsuario",
                columns: table => new
                {
                    RolesIdRol = table.Column<int>(type: "INTEGER", nullable: false),
                    UsuariosIdUsuario = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RolUsuario", x => new { x.RolesIdRol, x.UsuariosIdUsuario });
                    table.ForeignKey(
                        name: "FK_RolUsuario_Rol_RolesIdRol",
                        column: x => x.RolesIdRol,
                        principalTable: "Rol",
                        principalColumn: "IdRol",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RolUsuario_Usuario_UsuariosIdUsuario",
                        column: x => x.UsuariosIdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Barrio_Nombre",
                table: "Barrio",
                column: "Nombre",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Producto_IdBarrio",
                table: "Producto",
                column: "IdBarrio");

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_IdUsuario",
                table: "Reserva",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_RolUsuario_UsuariosIdUsuario",
                table: "RolUsuario",
                column: "UsuariosIdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Username",
                table: "Usuario",
                column: "Username",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Producto");

            migrationBuilder.DropTable(
                name: "Reserva");

            migrationBuilder.DropTable(
                name: "RolUsuario");

            migrationBuilder.DropTable(
                name: "Barrio");

            migrationBuilder.DropTable(
                name: "Rol");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
