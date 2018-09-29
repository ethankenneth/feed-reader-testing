/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });// End it('are defined', function)


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all feeds has url and not empty', function () {
            // loops through each feed
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var url = allFeeds[i].url;
                // ensures it as a URL defined
                expect(url).toBeDefined();
                // URL is not empty
                expect(url).not.toBe('');
            }// End for loop
        });// End it('all feeds hhas url and not empty', function)

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all feeds has name and not empty', function () {
            // loops through each feed
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var name = allFeeds[i].name;
                // ensures it has name defined
                expect(name).toBeDefined();
                // name is not empty
                expect(name).not.toBe('');
            }// End for loop
        });// End it('all feeds has name and not empty', function)

    });// End describe('RSS Feeds', function


    /* Write a new test suite named "The menu" */
    describe('The menu', function () {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function () {
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });// End it('menu element is hidden by default', function)

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu visible when clicked', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(false);
        });// End it('menu visible when clcked', function)

        it('menu hidden when clicked', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });// End it('menu hidden when clicked', function)
    });// End describe('The menu', function)


    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });// End beforeEach(function (done))

        it('loadFeed function is called and completes its work', function (done) {
            // ensures there is atleast a single .entry element within the .feed container
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });// End it('loadFeed function is calledand completes its work', function)
    });// End describe('Initial Entries', function)

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feed0;
        let feed1;

        beforeEach(function (done) {
            loadFeed(0, function () {
                feed0 = $('.feed').find('h2')[0].innerText;
                done();
            });// End loadFeed(0, function())
        });// End beforeEach(function (done))

        afterEach(function (done) {
            loadFeed(0, done);
        });// End afterEach(function (done))

        it('new feed is loaded by the loadFeed function that the content actually changes', function (done) {
            loadFeed(1, function () {
                feed1 = $('.feed').find('h2')[0].innerText;
                expect(feed0).not.toEqual(feed1);
                done();
            });// End loadFeed(1, function ())
        });// End it('new feed is loaded by the loadFeed funtion that the content actually changes', funtion (done))
    });// End describe('New Feed Selection', function ()
}());// End $(function ())
