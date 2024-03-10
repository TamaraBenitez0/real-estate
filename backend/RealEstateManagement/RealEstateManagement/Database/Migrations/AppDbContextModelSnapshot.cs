﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RealEstateManagement.Database;

#nullable disable

namespace RealEstateManagement.Database.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.2");

            modelBuilder.Entity("RealEstateManagement.Domain.Barrio", b =>
                {
                    b.Property<int>("IdBarrio")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("IdBarrio");

                    b.HasIndex("Nombre")
                        .IsUnique();

                    b.ToTable("Barrio");
                });

            modelBuilder.Entity("RealEstateManagement.Domain.Producto", b =>
                {
                    b.Property<Guid>("Codigo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Descripcion")
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<int>("EstadoProducto")
                        .HasColumnType("INTEGER");

                    b.Property<int>("IdBarrio")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Precio")
                        .HasColumnType("TEXT");

                    b.Property<string>("UrlImagen")
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.HasKey("Codigo");

                    b.HasIndex("IdBarrio");

                    b.ToTable("Producto");
                });

            modelBuilder.Entity("RealEstateManagement.Domain.Reserva", b =>
                {
                    b.Property<int>("IdReserva")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<Guid>("CodigoProducto")
                        .HasColumnType("TEXT");

                    b.Property<int>("EstadoReserva")
                        .HasColumnType("INTEGER");

                    b.Property<string>("NombreCliente")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("IdReserva");

                    b.ToTable("Reserva");
                });

            modelBuilder.Entity("RealEstateManagement.Domain.Producto", b =>
                {
                    b.HasOne("RealEstateManagement.Domain.Barrio", "Barrio")
                        .WithMany("Productos")
                        .HasForeignKey("IdBarrio")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Barrio");
                });

            modelBuilder.Entity("RealEstateManagement.Domain.Barrio", b =>
                {
                    b.Navigation("Productos");
                });
#pragma warning restore 612, 618
        }
    }
}
