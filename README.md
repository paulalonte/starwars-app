# Starwars App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Description

The application is using NgRx for state management to easily handle state changes. Added @effects also to handle side effects when calling api endpoints. This way we reduce the business logic in component level. The data flow of this application is we send an action, run side effects to call api, and on success we dispatch success action to update our store.

## Usage

```
# install dependencies
npm install

# run app
npm run start

# run cypress
npm run cypress:open

# run unit test
npm run test

```

## UI

- Bootstrap for UI. This is also responsive using mobile phone, tablet and desktop size.
- Accessibility to navigate through pages. You can test using Screen Reader/ Chromevox extension for screen reader. This can be improved by also adding live regions. (polite, or assertive)

## What are the features created

- I used .scss for this application. This could be improve by creating variables to have a consistent look in all pages however lack of time already.
- Api call prevention when loading character list, character and homeworld details when data is already present in store. You can check in the network tab
- Used Angular routing for navigating to different pages. (e.g.)

  - localhost:4200/characters
  - localhost:4200/characters/1
  - localhost:4200/characters/1/planet/8

- I added some e2e cypress test for character list and character detail.
- I added some basic karma unit test
- Users can go to Star Wars list page and navigate to different pages. This will also retain the current page when you go back from details page.
- Added 404 page. Redirecting to 404 page also when api call fails/error.
