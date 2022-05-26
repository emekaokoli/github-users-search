# Github user search app

A simple app that lets you search through guthub's users and get more details about the user.

# Project directory

```bash
src
 ┣ assets
 ┃ ┗ GitHub-Mark-Light-120px-plus.png
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
 ┃ ┗ SearchAPI.util.js
 ┣ __tests__
 ┃ ┣ Home.test.js
 ┃ ┗ ListUsers.test.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

# Design

Notice how the app uses best practice by leveraging the power of react's modularity by breaking the it into smaller components and reusable components, this makes maintaining the app very easy.

With simplicity and minimal design in mind, you'll see the total list of searched result(s) and it defaults to `0` when no search we performed thereby giving the user feedback of search progress. I lifted the state to the nearest parent component and pass/`drilled props` to the `Home component` which renders `Header component` and the `SearchUsers component` so as to have access to the data and functions that performs different role within app, furtherm more, I also reused `SearchUsers component` when the `url` changes from forward slash `/` to `/search` by clicking the `search button`. The `SearchUsers component`, renders the `ListUsers component` that returns a paginated list of user results, to see more details of each user, the app fantastically leverage the use of `url parameter` like so `/users/username` to render a detailed page of the user by displaying information like `followers count, user bio, location, blog etc.` and also uses `Link` from the `react-router-dom` to back to the previous page.

I am pleased that I used the latest technology in react eco-system like `react 18` and `react-router-dom 6`'s new feature like `Routes, Route` I used the `Link` for user event navigation and `react-router-dom`'s `useNavigate hook` to programatically change the url location to render different components based on the url.

Lastly i leveraged the `react-router-dom`'s `useParams` hook to get the current Id of the user to get detailed infomation about a single user.

### Notable highlights

- use of `usecallback hook` to memoise the search function and avoid unnecessary rerenders.
- Components reuse and modularity.
- use of `useParams` hook to get the current Id of the user to get detailed infomation about a single user.
- use of `useNavigate` hook to programatically change the url location to render different components based on the url.
- use of `useState hook` to store the search result(s) and pagination implementation.

# Setup

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Test

To perform jest tests, run locally using yarn test.:

### `yarn test`

# Posible improvement consideration

Ofccourse, there's many room for improvement like user experience, design and architechture etc.

For example, the app can benefit from a better user experience, `by not using the standard method of searching by clicking a search button` which increases number of network calls, but by introducing the concept of `debouncing`, which is a way of improving performance and frequent requests to the API.

Another consideration, is by replacing prop drilling pattern used in the app by using state management like `redux/toolkit`.

# Technologies used

- React
- React-router-dom
- Bootstrap
- in-built browser fetch
- Javascript

# Demo

https://main--eloquent-rolypoly-0b8007.netlify.app/

# please note:

that this project requires environment variable containing the access_token to run.

# License

    MIT License

# Contributing

    Feel free to fork this project and make sure to include your changes.
    If you have any questions or comments, please file an issue or open a pull request.
    Contributors are welcome.

# Developer

    [@emyokoli](https://wwww.twitter.com/emyokoli)
    [@emyokoli](https://wwww.github.com/emekaokoli)
