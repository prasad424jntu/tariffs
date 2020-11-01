# `Tariff Comparison API`

This API helps user to compare different tariffs on their annual costs.

Comparison will accept : 

            Consumption (kWh/year)
            
Return a list of products with columns:
  
            Tariff name
            Annual costs (€/year)

# `Initial setup `

Software prerequisites: 
   >  node.

 1) clone the project (git clone https://github.com/prasad424jntu/tariffs.git)
    
    Run below commands from root folder:
 2) npm install
 3) npm start
 
 4) access the tariff comparison api through swagger here:
        http://localhost:3001/api-docs
       
   Alternatively can directly access from a browser using the following url:
        http://localhost:3001/tariffs/list?annualconsumption={value}
        
  5) run the test cases -> npm run test
  
  6) run lint -> npm run lint
 
   
 # ` Swagger  `
 
 Added a basic swagger support without using too many third party libraries.
 
    http://localhost:3001/api-docs
 
 # ` Test cases `
 
 Test cases are written using mocha/ chai.
 
 
 # ` Linting `

Linting is added. To test linting run npm run lint 

# ` Docker `

Composed docker file to run the app in a container.

Prerequisites: 
       > Need to have docker package installed (npm install docker)
       > Docker Desktop - Application for running containerised applications in local.
       
Steps to run in a container:

      1)  docker build -t tariffs .
      2)  docker run -p 3001:3001 tariffs
      3)  access swagger to test: http://localhost:3001/api-docs
       
              


 
 
 
 
