/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {

    describe('RSS Feeds', function() {  // Passes when the feeds are loaded; when their URLs and names exist and are not empty.  

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have non-empty URLs', function(){
            for (feed in allFeeds) {
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);
            }
        }); 

        it('have non-empty names', function(){
            for (feed in allFeeds) {
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).not.toBe(0);
            }
        }); 
    });

    describe('The menu', function() { // Passes, when the menu is hidden at the first load of the page and appears on click
        beforeEach(function(){
            el = document.querySelector('body');
        });

        it('is hidden by default', function(){
            expect(el.classList.contains('menu-hidden')).toBeTruthy();  
        });

        it('displays and hides on click', function(){
            menuIcon = $('.menu-icon-link');
            menuIcon.trigger("click");
            expect(el.classList.contains('menu-hidden')).toBeFalsy(); 

            menuIcon.trigger("click");
            expect(el.classList.contains('menu-hidden')).toBeTruthy(); 
        });  
    });       

    describe('Initial Entries', function() { // Passes, when a feed contains at least one entry
        beforeEach(function (done) {
            loadFeed(0, done); 
        });

        it('are loaded', function(done){
            expect($('.feed')[0].children[0].classList.contains('entry-link')).toBeTruthy();
            done();
        }); 


    });

    describe('New Feed Selection', function() { // Passes, when feed content changes upon loading another feed
        beforeEach((done)=> {
            loadFeed(0, function() {           
                loadFeed(1, function() {
                    done(); 
        });
    });
});

        it('should change the content', function(done){
            expect($('.feed')[0].children[0].href).toContain('https://www.youtube.com/watch?v=tvLF7zllsv0');
            done();
        }); 
    });     
}());
