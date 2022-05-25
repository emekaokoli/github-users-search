# Github user search app 

A simple app that lets you search through guthub's users and get more details about the user.

# Project directory
```bash
src
 ┣ components
 ┃ ┣ navs
 ┃ ┃ ┗ Header.js
 ┃ ┣ Home.js
 ┃ ┣ ListUsers.js
 ┃ ┣ NotFound.js
 ┃ ┣ SearchUsers.js
 ┃ ┗ UserDetails.js
 ┣ styles
 ┃ ┣ link.styles.css
 ┃ ┣ list.user.styles.css
 ┃ ┣ searchUsers.styles.css
 ┃ ┗ user.details.styles.css
 ┣ utils
 ┃ ┣ Link.js
 ┃ ┗ SearchAPI.util.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
```
# Setup

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Posible improvement consideration
The can be further improved upeon giving more then interms of user experienc, design and architechture over all.

for example, the app can benefit from a better user experience, `by not using the standard method of searching by clicking a search button`, but introducing the concept of `debouncing`, which is a way of improving performance.

Another consideration, is by replacing prop drilling pattern used in the app by using state management like `redux/toolkit`.

# Technologies used
* React
* React-router-dom
* Bootstrap
* fetch
* Javascript

# Demo


# please note:
 that this project requires environment variable containing the access_token to run.
