# Purpose

This app demos some of the cool features that Netlify makes easy. Specifically, it incorporates:

- Netlify Identity - Easy and customizable built-in authentication.
- Netlify Functions - A wrapper for AWS Lambda/API Gateway that makes it simple to test out and deploy server-side functions accessible by API and tied to a particular Github branch. These functions can also be handed the user and identity data from Netlify Identity.

## Getting Started

- Install NPM (using NVM is best).
- Clone this repo.
- Change the Github remote to your own repository.
- Run `yarn install`.
- Run `yarn start` and view the local app at `localhost:3000`.
- Make and commit any changes.
- Push to your Github repository.
- Create a Netlify account and choose to deploy with `yarn build` as the build command and `build` as the directory (should be set as defaults).

## Or...

To simply deploy it to a URL associated with your Netlify account:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/weareredshift/netlify-functions-demo)
