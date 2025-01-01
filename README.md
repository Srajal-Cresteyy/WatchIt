# WatchId - Book Tickets and Seats

![WatchIt](WatchIt/demo.gif)

Book seats for your event or movies 

## Table of Contents

- [Cinema Ticket Booking System](#cinema-ticket-booking-system)
  - [Features](#features)
  - [TechStack](#technologies)
  - [Overview](#getting-started)
  - [About Backend](#steps-to-setup-the-spring-boot-backend-app)
  - [About Frontend](#steps-to-setup-the-react-frontend-app)

## Features

- **User registration**: For personalization and access to exclusive deals.
- **Movie Selection**: Browse through a wide selection of available movies.
- **Movie Search**: Easily find movies by name using the search feature.
- **Genre Filtering**: Filter movies based on genres for a more tailored browsing experience.
- **Movie Sessions**: Choose the best time for you to watch a movie.
- **Seat recommendation**: Recommended for optimal sound quality and viewing experience.  
- **Seat Selection**: Choose your desired seats for the selected movie.
- **Booking Management**: Efficiently book seats and store booking information in the database.
- **Dynamic Seat Updates**: Real-time updates of seat availability based on new bookings and movie sessions.
- **Movie recommendations**: Movie recommendations for registered users based on their past viewing history and preferences.

## Technologies

- Spring Boot 3.2
- Maven

## Getting Started

To get started with this project, you will need to have the following installed on your local machine:

- JDK 21+
- Maven 3+
- PostgresSql
- PGAdmin

## Steps to Setup the Spring Boot Backend app

1. **Clone the application**

```zsh
git clone https://github.com/EgonSaks/cinema-ticket-booking-system.git
cd backend
```
2. **Install PostgresSQL and PGAdmin GUI**

Refer the docs [installing and starting MySQL on different platforms]([https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing](https://www.postgresql.org/docs/current/tutorial-install.html)).


2. **Create username and password as per your PostgresSql installation**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

2. **Create a new Database named cinema**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

3. **Run the app**

	You can run the spring boot app by typing the following command

	```zsh
	mvn spring-boot:run
	```

	The backend application will be available at http://localhost:8089.

## Steps to Setup the React Frontend app

1. **Get API Key and API Read Access Token for accessing movies data**

     + [API KEY](https://www.themoviedb.org/settings/api)

2. **Add API KEY and API Read Access Token to .env**

    + open `frontend/.env`
    + add `REACT_APP_API_KEY=YOUR_API_KEY` and `REACT_APP_ACCESS_TOKEN=YOUR_ACCESS_TOKEN` properties as per your data from [themovies.org](https://www.themoviedb.org/settings/api)

3. **Run the app**
```zsh
cd frontend
npm install
npm start
```

The frontend application will be available at http://localhost:3000.
