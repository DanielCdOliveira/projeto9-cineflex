<div align="center"><img style = "width:100%;"src="https://i.imgur.com/qRRWTCx.png"></img></div>
<hr>
<h2 align=center>Cineflex</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A Single-Page Application (SPA) for a movie theater, using React Router</h4>

<br>
<div align=center style="display:flex; justify-content: center; gap:5%">
<img src="https://media.giphy.com/media/ZEiusYVtySiPmWwWb2/giphy.gif" width="209"></img>
</div>
<br><hr>

## Features

- User can select movie, day and session
- Distinction between occupied, available and selected seats
- Visual response to selected seats
- Order summary on final screen
- Uses API to receive and control data
- Uses React Router to switch pages

## Requirements

- Movie choice (route "/")
    - [x] Fetch movie information by API provided and display according to provided layout
    - [x] When clicking on a movie, the user must be redirected to the route "/sessoes/:idFilme", ​​where :idFilme is the id of the clicked movie
- Session selection (route "/sessoes/:idFilme")
    - [x] From the id of the URL, get the available sessions for the movie from the API and display as per the given layout
    - [x] When clicking on a session, the user must be redirected to the route "/sestos/:idSessao", where :idSessao is the id of the chosen session
- Seat choice (route "/sestos/:idSession")
    - [x] From the session id, fetch the session data from the API and display the layout as provided
    - [x] When clicking on an available seat, the seat must be marked as "Selected"
    - [x] When clicking again on a selected seat, it should return to "Available"
    - [x] When clicking on an unavailable seat, a "This seat is unavailable" alert should appear
    - [x] User can select multiple seats
    - [x] The user must be able to enter the buyer's name and CPF
    - [x] By clicking on "Reserve seat(s)", the request must be sent to the server and the user must be redirected to the "/success" route. This will make the assigned seats unavailable for other bookings.
- Baseboard
    - [x] Along the Session and Seat screens, a footer should be displayed with the information of the selected movie. This information will come from the API calls on each screen
- Success
    - [x] Implement layout as provided, displaying order placed data
    - [x] When clicking on "Home" the user must return to the initial route ("/"), with the order zeroed

## Usage

Install my project with npm

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/projeto9-cineflex.git
```
>Install dependences:

```bash
  npm install
```
> Run aplication:

```bash
  npm start
```

## Deploy

- Deploy using [Vercel](https://projeto9-cineflex-xi.vercel.app/)

### Built with

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
