﻿using Carter;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RealEstateManagement.Database;
using RealEstateManagement.Domain;
using RealEstateManagement.DTO.RoleDTOS;
using RealEstateManagement.DTO.UsuarioDTOS;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace RealEstateManagement.Endpoints
{
    public class AccountEndpoints(IConfiguration configuration) : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder routes)
        {
            var app = routes.MapGroup("/api/Account");

           
           


            app.MapPost("/Register", (AppDbContext context, UsuarioRegisterDto request) =>
            {

                CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

                var user = new Usuario()
                {
                  
                    Username = request.Username,
                    Name = request.Username,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt
                };

                var role = context.Roles.FirstOrDefault(x => x.Name == request.Role);

                if (role is null)
                {
                    return Results.BadRequest("Rol inexistente.");
                }
                var userNameExist = context.Usuarios.FirstOrDefault(u => u.Username == request.Username);
                if(userNameExist != null)
                {
                    return Results.BadRequest("El username ya esta en uso,pruebe con otro.");
                }

                user.Roles.Add(role);

                context.Usuarios.Add(user);

                context.SaveChanges();

                var userCreated = context.Usuarios.FirstOrDefault(x => x.Username == user.Username);

                return Results.Ok(new { IdUsuario = userCreated.IdUsuario, Username = userCreated.Username, Role = userCreated.Roles.First().Name });
            })
                .WithTags("Account")
                .AllowAnonymous();

       


            app.MapPost("/Login", (AppDbContext context, UsuarioDTO request) =>
            {

                var user = context.Usuarios.Where(x => x.Username == request.Username).Include(x => x.Roles).FirstOrDefault();

                if (user is null)
                {
                    return Results.BadRequest("Usuario inexistente.");
                }

                if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
                {
                    return Results.BadRequest("Contraseña incorrecta.");
                }

                var token = new { accessToken = CreateToken(user) };

                return Results.Ok(token);
            })
                .WithTags("Account")
                .AllowAnonymous();

            app.MapPost("/Role", (AppDbContext context, RolDTO request) =>
            {
                var role = new Rol()
                {
                    Name = request.Name
                };

                context.Roles.Add(role);

                context.SaveChanges();

                return Results.Ok(role);
            })
                .WithTags("Account")
                .RequireAuthorization(new AuthorizeAttribute { Roles = "administrador" });

            app.MapPost("/User/{userId:int}/AddRole/{roleId:int}", (AppDbContext context, int userId, int roleId) => {

                var user = context.Usuarios.FirstOrDefault(x => x.IdUsuario == userId);

                if (user is null)
                {
                    return Results.BadRequest("Usuario inexistente.");
                }

                var role = context.Roles.FirstOrDefault(x => x.IdRol == roleId);

                if (role is null)
                {
                    return Results.BadRequest("Rol inexistente.");
                }

                user.Roles.Add(role);

                context.SaveChanges();

                return Results.Ok("Rol asociado");
            })
                .WithTags("Account")
                .RequireAuthorization(new AuthorizeAttribute { Roles = "administrador" });


            app.MapGet("/User", (AppDbContext context) =>
            {
                var users = context.Usuarios.Include(x => x.Roles).ToList().Select(x =>
                    new { x.IdUsuario, x.Username, x.PasswordHash, roles = x.Roles.Select(y => new { y.IdRol, y.Name }) });
                return Results.Ok(users);
            })
                .WithTags("Account")
                .RequireAuthorization(new AuthorizeAttribute { Roles = "administrador" });

            app.MapGet("/Role", (AppDbContext context) =>
            {
                var roles = context.Roles.Include(x => x.Usuarios).ToList().Select(x =>
                    new { x.IdRol, x.Name, users = x.Usuarios.Select(y => new { y.IdUsuario, y.Username }) });
                return Results.Ok(roles);
            })
                .WithTags("Account")
                .RequireAuthorization(new AuthorizeAttribute { Roles = "administrador" });

            app.MapGet("/User/{username}/reservasIngresadas", (string username, AppDbContext context) =>
            {
                var idUsuario = context.Usuarios.FirstOrDefault(u => u.Username == username)?.IdUsuario;

                if (idUsuario == null)
                {
                    return Results.BadRequest("El usuario no existe");
                }
                var usuario = context.Usuarios.Include(u => u.Reservas).FirstOrDefault(u => u.IdUsuario == idUsuario);



                var reservasIngresadasCount = usuario!.Reservas.Count(r => r.EstadoReserva == EstadoReserva.Ingresada);

                return Results.Ok(reservasIngresadasCount);
            }).WithTags("Account").AllowAnonymous(); 


            app.MapGet("/Users/Approved/Reservations", (AppDbContext context) =>
            {
                var vendedoresConReservasAprobadas = context.Usuarios
              .Include(u => u.Roles)
              .Include(u => u.Reservas)
              .Where(u => u.Roles.Any(r => r.Name == "vendedor"))
              .Select(u => new
              {
                  Username = u.Username,
                  NumeroReservasAprobadas = u.Reservas.Count(r => r.EstadoReserva == EstadoReserva.Aprobada)
              })
              .ToList();
                return Results.Ok(vendedoresConReservasAprobadas);

            }).WithTags("Account").RequireAuthorization(new AuthorizeAttribute { Roles = "administrador, comercial" });

        }



        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        private string CreateToken(Usuario user)
        {
            var claims = new List<Claim>
        {
            new Claim("name", user.Username),
        };

            string roles = string.Join(",", user.Roles.Select(x => x.Name));

            claims.Add(new Claim("role", roles));

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration.GetSection("Jwt:Key").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
    }

