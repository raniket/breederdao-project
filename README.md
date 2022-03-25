# Project setup steps

Create a .env file and set the right values for reference have a look at the .env.example file


# Build & Start
    npm install
    npm run build
    npm run start


# Tests
## Run Tests
    npm run test

## Get Test Coverage
    npm run coverage



# Run App Using Docker
### Make sure you have the docker installed and run the below commands
    docker build . -t <your username>/node-web-app
    docker run -p 8080:8080 -d <your username>/node-web-app
    