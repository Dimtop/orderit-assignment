# Orderit assignment
An application that displays analytics about a user's orders.

## General Notes
- Technologies used: Nest JS, React, React Redux, rsuite (components library), react-chartjs-2 (chart js react wrapper), Mongo DB, Typescript (both frontend and backend).

- A very simple authentication strategy was implemented. There is a list with all the available users in the login form. Once a user is selected and login button pressed, the server handles the login process using this strategy, which checks if the user is active (using the relative field in the DB). Note that with the data provided and structure only one user will be included in the users list. This is because when fetching the users they are matched with their buyer id. If a user instance does not relate to a buyer instance, then he is not included (buyer id is necessary for the analytics).

- Once logged in, you can navigate to the application's features using the menu in the top left corner of the screen.

- Every analytics chart comes with a date range filter. The chart is updated every time a date range is selected and the 'OK' button on the calendar is pressed. To reset the chart someone must press the x button in the calendar.

- Forgive any lack of typing. This is beacause of the fast development process (as this is an assignment). 

- To run this project clone this repository localy and follow the configuration instructions below.

- For your convinience, .env files are included.

## Client
### Configuration
- REACT_APP_API_URL=<the_api_url_here> (e.g. REACT_APP_API_URL=http://localhost:5000)

### How to run
- Navigate to the `client` directory
- Run `npm install`
- Run `npm start`

The application runs in http://localhost:3000 by default

## Server
### Configuration
- DB_URI=<mongo_db_uri>

- DB_AUTH=<tls | ssl | *leave empty*></tls>
- DB_PEM_FILE=<path_to_pem_file>
- DB_CA_FILE=<path_to_ca_file>
- DB_KEY_FILE=<path_to_key_file>
- DB_CERT_FILE=<path_to_cert_file>
- PORT=5000

The are 3 ways of db authentication:

#### 1) TLS
For tls authentication you have to config the DB_URI, DB_PEM_FILE variables and set DB_AUTH=tls

Leave DB_CA_FILE, DB_KEY_FILE, DB_CERT_FILE empty

As for the assignment, I am using tls authentication. The pem file is under the server directory, named cert.pem

#### 2) SSL
For ssl authentication you have to config the DB_URI, DB_CA_FILE, DB_KEY_FILE, DB_CERT_FILE variables and set DB_AUTH=ssl

Leave DB_PEM_FILE empty

#### 2) Username - password
For username - password authentication you have to config the DB_URI variable

Leave DB_CA_FILE, DB_KEY_FILE, DB_CERT_FILE, DB_PEM_FILE, DB_AUTH empty

### How to run
- Navigate to the `server` directory
- Run `npm install`
- Run `npm run start:dev` or  `npm start`
