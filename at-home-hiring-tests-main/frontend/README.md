# Frontend At-Home Hiring Exercise

Welcome to the Zefir frontend test.

The expected duration of this test is about one hour.

## Setup

### Prerequisites

Prerequisites are Node 14 and Yarn.

We recommend [NVM](https://github.com/nvm-sh/nvm) for installing specific version of Node

For instance to install Node 14 you can type:

    $ nvm use lts/fermium

### Running the app in dev mode

To install dependencies:

    $ yarn

to run the Next app locally:

    $ yarn dev

to open the app:

   $ open [localhost:3000](http://localhost:3000)

(or open your browser)

## Evaluation

The main criteria is to be able to meet the expected result for each question, but we will also evaluate the quality of your work in general, such as code quality, comments, formatting.

*Important note*: we will build your app (with `yarn build`) and run it in production mode (with `yarn start`) for the evaluation.

## Questions

### Question 1 - let's warm-up with some SSR lifting

There seem to be an issue with the home page on [localhost:3000](http://localhost:3000), can you fix it?

Note: after fixing the page, you will see it takes a few seconds load: this delay is normal and part of the exercise.

### Question 2 - Client-side loading

We would like to make the page feel faster by showing a loader animation (a pulsating Zefir logo), so it is decided to do the call on the client side.

A developer created the page `/pages/homes` but it seems to be broken.

Can you find what is wrong and correct it?

Note: You can refactor the code to fix any logic, ESLint or TypeScript issue, but you have to keep the `useEffect` in place.

*Expected result:*

- when going to [/homes](https://localhost:3000/homes), we should see an animated loader for a few seconds, then a list of homes.

### Question 3 - Highlight current page and be responsive

We would like to have the following UI and UX improvements:

1. Can you highlight the name of the current page in the side menu?
You can use the Tailwind color `text-blue-500` on the active link.

2. Can you make the list of home cards *responsive*?

We would like to see one column on mobile, and more columns on larger screens.
You are free to choose the number of columns and the Tailwind breakpoints.

*Expected result:*

- when navigating to a page, the related link in the left side menu should become blue
- when resizing the browser's window, the number of columns should change

### Question 4 - Detailed modal for a home

Can you make a modal appear when we click on a home in the list?

Note: You can use the provided `Modal` component for that.

*Expected result:*

- When clicking on a home a modal should appear
- It should contain a larger-version of the home picture
- It should list *all* the fields of a home, except the ID (don't forget the number of floors!)
- These fields should display their units (surface in m2 etc)

### Question 5 - Add a filtering component

Can you add a text input field to allow filtering homes by address?

*Expected result:*

- The list should updates in real time as we type.
- You are free to choose a position on the page where to add the filter.
- It should be possible to type only a part of the address, for instance
typing "paris" or "75" should only show homes located in Paris.


### Question 6 - Localized pricing

Can you format all the prices visible on the app using the English style?

General rules:

- All prices on all pages must be localized
- The formatting style locale must be `en-US`
- The `currency` must be be the one associated with each house

To save time we recommend you to use a native browser API for that.

Display rules:

- Thousands separated by a comma (eg `100,000` instead of `100000`)
- Use a symbol (eg. `€` instead of `EUR`)
- No decimals (eg. `100,000` instead of `100,000.00`)
- Currency symbol at the front (eg. `¥1,200,000`)

*Expected result:*

- example: the price "450000" with currency "GBP" should be "£420,000"

### Question 7 - Testing in production

Now has come the time to run your application in production mode!

To do so, first you need to build your Next app:

    $ yarn build

Fix any blocking error you see, then start in production mode:

    $ yarn start

And go to [localhost:3000](http://localhost:3000)

Please make sure that the following behaviors are not broken in production mode:

- all pages should work properly
- reloading the homepage it should display random homes each time

If everything is working: congratulations!

Otherwise, you may have to go back to some of the previous questions and investigate.

Note: you are allowed to update anything in the `package.json` if necessary.
