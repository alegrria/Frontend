/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have non-empty URLs', function(){
            for (feed in allFeeds) {
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url).toContain('http://');
            }
        }); 

        it('have non-empty names', function(){
            for (feed in allFeeds) {
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name).not.toBeNull();
            }
        }); 
    });

    describe('The menu', function() {
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

    describe('Initial Entries', function() {
        beforeEach(function (done) {
            loadFeed(0, done); 
        });

        it('are loaded', function(done){
            expect($('.feed')[0].children[0].classList.contains('entry-link')).toBeTruthy();
            done();
        }); 


    });

    describe('New Feed Selection', function() {
        beforeEach(function (done) {
            loadFeed(3, done);
        });

        it('should change the content', function(done){
            expect($('.feed')[0].children[0].href).toContain('linear-digressions');
            done();
        }); 
    });     
}());
