Feature:User

Background: 
 * configure ssl = true

 * def pagina = 'https://localhost:7232/api/Account/'

 Scenario: inicia sesion un usuario con exito
 Given url pagina+ '/Login'
 * request 
"""
{
   "username": "Diego",
   "password": "nextjs"

}
"""
When method POST
Then status 200

 Scenario: un usuario se equivoca su contraseña
 Given url pagina+ '/Login'
 * request 
"""
{
   "username": "Diego",
   "password": "nextj"

}
"""
When method POST
Then status 400

 Scenario: un usuario se equivoca su username
 Given url pagina+ '/Login'
 * request 
"""
{
   "username": "Dieg",
   "password": "nextjs"

}
"""
When method POST
Then status 400


Scenario: un usuario se registra como comercial
Given url pagina+ '/Register'
* request
""" 
{
    "username": "PruebaComercial",
    "password": "prueba123",
    "role": "comercial"
}
"""
When method POST
Then status 200

Scenario: un usuario se registra como vendedor
Given url pagina+ '/Register'
* request
""" 
{
    "username": "PruebaVendedor",
    "password": "pruebaV123",
    "role": "vendedor"
}
"""
When method POST
Then status 200



Scenario: obtener la cantidad de reservas ingresadas de un usuario
Given url pagina+ '/User/Vicky/reservasIngresadas'
When method GET
Then status 200

Scenario: no se puede obtener la cantidad de reservas ingresadas de un usuario inexistente
Given url pagina+ '/User/AnaKeyla/reservasIngresadas'
When method GET
Then status 400

Scenario: obtener todas las ventas de los usuarios consultando con usuario vendedor
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+ '/Users/Approved/Reservations'
When method GET
Then status 403

Scenario: obtener todas las ventas de los usuarios consultando con usuario comercial
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGllZ28iLCJyb2xlIjoiY29tZXJjaWFsIiwiZXhwIjoxNzEyNzAyNDMxfQ.cDb8CM8wfNIv2MIMHZ8_qyiQ4AdWHyeJMPrq0rgHmI5uUz652F6t99Ve2BYYhAqUdvVY6ZuPlY2yNnTgmb_QaA'
Given url pagina+ '/Users/Approved/Reservations'
When method GET
Then status 200