var expect = require("chai").expect;
var assert = require("chai").assert;
var getsum = require("../index.js");

describe("Getsum", function() {
   
    it("should have ipsum data", function() {
        expect(getsum.ipsumData)
            .to.have.length.at.least(1)
            .and.to.be.a("string");
    });


    describe("characters()", function() {

        it("should return a string", function() {
            expect(getsum.characters()).to.be.a("string");
        });

        it("should return the correct number of characters", function () {
            expect(getsum.characters(10))
                .to.have.length(10)
                .and.to.be.a("string")
        });

        it('should end with a lowercase letter and full stop', function () {
        	var string   = getsum.characters(10);
        	expect(string).to.match(/[a-z]\.$/);
        });

    });

    describe("words()", function () {
        
        it("should return a string", function () {
            expect(getsum.words(10)).to.be.a("string");
        });

        it("should return the given number of words", function() {
        	var string = getsum.words(5);
        	stringArray = string.split(' ');
        	expect(stringArray).to.have.length(5);
        });

    });

});