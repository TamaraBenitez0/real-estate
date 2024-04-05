Feature:Barrio

Background: 
 * configure ssl = true

 * def pagina = 'https://localhost:7232/api/Barrio'
 * def obtenerUnBarrio = 1

Scenario: obtener todos los barrios

Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFtYXJhIiwicm9sZSI6ImFkbWluaXN0cmFkb3IiLCJleHAiOjE3MTI2ODE1ODh9.9Z8NTNXCK017kK-L_Kle5Ht8oZVz1GNAi2pMAJ0sephq2Jry-I2C7ytIfY-h27iyL3xNOen4wXb5odsLa2wJDQ'
Given url pagina
When method GET
Then status 200

Scenario: obtener un barrio

Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFtYXJhIiwicm9sZSI6ImFkbWluaXN0cmFkb3IiLCJleHAiOjE3MTI2ODE1ODh9.9Z8NTNXCK017kK-L_Kle5Ht8oZVz1GNAi2pMAJ0sephq2Jry-I2C7ytIfY-h27iyL3xNOen4wXb5odsLa2wJDQ'
Given url pagina+'/'+obtenerUnBarrio
When method GET
Then status 200

Scenario: agregar barrio
Given header Authorization = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFtYXJhIiwicm9sZSI6ImFkbWluaXN0cmFkb3IiLCJleHAiOjE3MTI2ODE1ODh9.9Z8NTNXCK017kK-L_Kle5Ht8oZVz1GNAi2pMAJ0sephq2Jry-I2C7ytIfY-h27iyL3xNOen4wXb5odsLa2wJDQ'
Given url pagina
* request 
"""
{
    "nombre": "KarateBarrio2"

}
"""
When method POST
Then status 201