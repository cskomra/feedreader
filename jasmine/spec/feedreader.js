/* feedreader.js
 *
 * The spec file that Jasmine reads.  It contains
 * all of the tests that are run against the application.
 * All tests are within the $() function to ensure
 * that tests run after the DOM is ready.
 */
$(function() {
    // Test suite about the RSS feeds definitions
    describe('RSS Feeds', function() {
        /* Test to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that each feed in the allFeeds object
         * has a URL defined and that the URL is not empty.
         */
        it('have URLs that are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var feedURL = allFeeds[i].url;
                expect(feedURL).toBeDefined();
                expect(feedURL.length).toBeGreaterThan(0);
            }
        });


        /* Test that each feed in the allFeeds object
         * has a name defined and that the name is not empty.
         */
        it('have names that are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var feedName = allFeeds[i].name;
                expect(feedName).toBeDefined();
                expect(feedName.length).toBeGreaterThan(0);
            }
        });
    });

    // Test suite about the menu
    describe('The menu', function() {

        // Test that the menu element is hidden by default.
        it('is hidden by default', function() {
            expect($('body').attr('class')).toBe('menu-hidden');
        });

        /* Test that the menu changes visibility when the
         * menu icon is clicked.
         */
        it('changes visibility when menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');

            if (menuIcon.trigger('click')) {  // menuIcon was clicked once
                expect($('body').attr('class')).not.toBe('menu-hidden'); // menu should not be hidden
                if (menuIcon.trigger('click')) { // menuIcon was clicked a second time
                    expect($('body').attr('class')).toBe('menu-hidden'); // menu should be hidden again
                }
            }
        });
    });

    // Test suite about initial feed entries
    describe('Initial Entries', function() {

        /* Test that when loadFeed() completes there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() { // async function
                done();  // signals to the framework...
            });
        });

        it('load at least a single .entry element within the .feed container', function(done) {
            // get .feed container; check for .entry element in it
            expect($('.feed').find(".entry").length).toBeGreaterThan(0);
            done(); // the function has completed
        });

     });

    // Test suite about new feed selections
    describe('New Feed Selection', function() {

        /* Test that when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
        var firstContainerHtml = "";
        beforeEach(function(done) {
            loadFeed(0, function() {
                // get firstContainerContent after loading first Feed
                firstContainerHtml = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        // expect first Feed container content to not be same as second Feed container content
        it('actually changes container content', function(done) {
            // get second .feed container; check against first container
            var secondContainerHtml = $('.feed').html();
            expect(firstContainerHtml).not.toBe(secondContainerHtml);
            done();  // the function has completed
        });
    });
}())
