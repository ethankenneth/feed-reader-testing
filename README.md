# Project Overview

In this project I given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## What I learned

I learned how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.

## How to use

Download or clone all files. Open index.html in your favorite browser (ctrl_o) and scroll to the bottom to see the success or failure of each required test.

## Submissions

This is part of the Udacity Front-End Web Developer Nanodegree Program, and as such, no submissions will be accepted. However, as always, I am happy to listen to constructive criticism or ideas that may help me improve! Please, feel free to contact me directly with any such ideas. 

# What I did to complete this project

Reviewed the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Took the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Reviewed the functionality of the application within your browser.
4. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Returned the `allFeeds` variable to a passing state.
8. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Wrote a new test suite named `"The menu"`.
11. Wrote a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Wrote a test suite named `"Initial Entries"`.
14. Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Wrote a test suite named `"New Feed Selection"`.
16. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test is dependent on the results of another.
18. Callbacks are used to ensure that feeds are loaded before they are tested.
19. Implemented error handling for undefined variables and out-of-bound array access.
20. All tests  pass.
21. Wrote a README file detailing all steps required to successfully run the application.
