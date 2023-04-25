# HenkelDx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

# Challenge

Star wars app

## Description

The application is using NgRx for state management to easily handle state changes. Added @effects also to handle side effects when calling api endpoints. This way we reduce the business logic in component level. The data flow of this application is we send an action, run side effects to call api, and on success we dispatch success action to update our store.

## Usage

```
# run app
npm run start

# run cypress
npm run cypress:open

# run unit test
npm run test

```

## UI

- I used bootstrap for UI
- I could have added Skeleton when loading UI for better User experience
- I added some basic accessibility to navigate through pages. You can test using Screen Reader/ Chromevox extension for screen reader. This can be improved by also adding live regions. (polite, or assertive)

## What are the features created

- I used .scss for this application. This could be improve by creating variables to have a consistent look in all pages however lack of time already.

- Used Angular routing for navigating to different pages. (e.g.)

  - localhost:4200/characters
  - localhost:4200/characters/1
  - localhost:4200/characters/1/planet/8

- Handled state management using NgRx together with effects

- UX/UI I just used bootstrap to make elements have a default styling already

- I added some e2e cypress test for character list and character detail.

- I added some basic karma unit test

- Users can go to Star Wars list page and navigate to different pages. This will also retain the current page when you go back from details page.

## Things to improve

- I don’t have an error component if in case there is an error in the api call. I could have added some error in the store

- Caching of the page so no need to call api again

- Translation also would be good for accessibility. Using i18n

- Created a more detailed test

- I could have created shareable components for the detail and home world page since it’s the same. But I have don’t much time. I could just reuse it
