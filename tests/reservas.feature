Feature:Reservas

Background: 
 * configure ssl = true

 * def pagina = 'https://localhost:7232/api/Reserva/'
 * def obtenerReserva = 4

Scenario: obtener todas las reservas
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+ '/getReservas'
When method GET
Then status 200

Scenario: obtener una reserva
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+'/'+obtenerReserva
When method GET
Then status 200


Scenario: crear una reserva con usuario comercial
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGllZ28iLCJyb2xlIjoiY29tZXJjaWFsIiwiZXhwIjoxNzEyNzAyNDMxfQ.cDb8CM8wfNIv2MIMHZ8_qyiQ4AdWHyeJMPrq0rgHmI5uUz652F6t99Ve2BYYhAqUdvVY6ZuPlY2yNnTgmb_QaA'
Given url pagina+ '/createReserva'
* request 
"""
{
  "nombreCliente": "Ariel",
  "codigoProducto": "70b2b427-b1d1-40cc-8437-22f740065821",
  "idBarrio": 1,
  "username": "Diego"

}
"""
When method POST
Then status 403


Scenario: cancelar una reserva con usuario comercial
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGllZ28iLCJyb2xlIjoiY29tZXJjaWFsIiwiZXhwIjoxNzEyNzAyNDMxfQ.cDb8CM8wfNIv2MIMHZ8_qyiQ4AdWHyeJMPrq0rgHmI5uUz652F6t99Ve2BYYhAqUdvVY6ZuPlY2yNnTgmb_QaA'
Given url pagina+'/8/cancel'
* request 
"""
{
  
}
"""
When method PUT
Then status 403

Scenario: aprobar una reserva con usuario vendedor
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+'/8/approve'
* request 
"""
{
  
}
"""
When method PUT
Then status 403

Scenario: rechazar una reserva con usuario vendedor
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+'/8/decline'
* request 
"""
{
  
}
"""
When method PUT
Then status 403

Scenario: crear una reserva con usuario vendedor
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+ '/createReserva'
* request 
"""
{
  "nombreCliente": "Justina",
  "codigoProducto": "fa44fc8b-87db-42d3-a2e4-99a518710e2d",
  "idBarrio": 2,
  "username": "Claudia"

}
"""
When method POST
Then status 201


Scenario: crear una reserva con usuario vendedor
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+ '/createReserva'
* request 
"""
{
  "nombreCliente": "Jaime",
  "codigoProducto": "48d1cb8d-33e1-45a7-bdc1-1bb306fcc25e",
  "idBarrio": 2,
  "username": "Claudia"

}
"""
When method POST
Then status 201

Scenario: aprobar una reserva con usuario comercial
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGllZ28iLCJyb2xlIjoiY29tZXJjaWFsIiwiZXhwIjoxNzEyNzAyNDMxfQ.cDb8CM8wfNIv2MIMHZ8_qyiQ4AdWHyeJMPrq0rgHmI5uUz652F6t99Ve2BYYhAqUdvVY6ZuPlY2yNnTgmb_QaA'
Given url pagina+'/10/approve'
* request 
"""
{
  
}
"""
When method PUT
Then status 200


Scenario: rechazar una reserva con usuario comercial
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGllZ28iLCJyb2xlIjoiY29tZXJjaWFsIiwiZXhwIjoxNzEyNzAyNDMxfQ.cDb8CM8wfNIv2MIMHZ8_qyiQ4AdWHyeJMPrq0rgHmI5uUz652F6t99Ve2BYYhAqUdvVY6ZuPlY2yNnTgmb_QaA'
Given url pagina+'/8/decline'
* request 
"""
{
  
}
"""
When method PUT
Then status 200

Scenario: cancelar una reserva con usuario vendedor
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhY28iLCJyb2xlIjoidmVuZGVkb3IiLCJleHAiOjE3MTI3MDA5MjB9.gOgSkyBRYhUO_cJFBnn6OYA0Zmlp1aTpF3uzZaG8e7vsQRgYiP4jtmcQaLVg2zhsPjzT4fsBvcQPP9AJCqVgUg'
Given url pagina+'/11/cancel'
* request 
"""
{
  
}
"""
When method PUT
Then status 200
