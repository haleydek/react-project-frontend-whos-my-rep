# Who's My Rep?

"Who's My Rep?" is a React-Redux app that encourages people to be more engaged and informed citizens.

Use this app to look up your local, state, and federal representatives by entering your address. Challenge yourself to get involved in your community and earn engagement badges when you complete tasks listed in your profile.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## API Reference

When a user enters their address to look up their representatives, the app queries the Representatives collection from the [Google Civic Information API](https://developers.google.com/civic-information/docs/v2/representatives).

A [Rails API](https://github.com/haleydek/react-project-backend-whos-my-rep) is used to persist User, Badge, and UsersBadge data.

## Installation

1. Fork and clone this repo and the [Rails API](https://github.com/haleydek/react-project-backend-whos-my-rep).

2. cd into this repo and run `$ npm install` in your terminal.

3. Follow the [instructions](https://developers.google.com/civic-information/docs/using_api) to request an API key for the Google Civic Information API.

4. Check that you are in the top-level directory of this repo in your terminal. Enter `$ touch .env`.

5. Add `.env` to the `gitignore` file.

6. Copy and paste `REACT_APP_API_KEY=''` into `.env`. Copy and paste your Google API key inbetween the `''`.

7. cd into the Rails API.

8. Run `$ rake start` in your terminal. The app will open automatically in your browser.

   This command will launch both the Rails API server and the frontend's Webpack dev server. The Webpack dev server will proxy requests intended for the Rails API server. For more info, check out [Foreman](https://github.com/ddollar/foreman) and this [blog post](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/).

9. When you are finished using the app, simply exit the window in your browser and enter `CTRL + C` in your terminal to stop running the servers.

## Contribution

Please fork and clone this repo and the [Rails API](https://github.com/haleydek/react-project-backend-whos-my-rep) repo if you would like to make your own changes.

## License

[MIT License](./LICENSE)