var expect = require("chai").expect;
var assert = require("chai").assert;
var getsum = require("../index.js");

describe("Getsum", function() {
   
   	describe('ipsumData', function () {
   		
	    it("should be an object", function() {
	        expect(getsum.ipsumData)
	            .to.be.an("object");
	    });

	    it('should have a lorem property', function () {
	    	expect(getsum.ipsumData).to.have.property("lorem");
	    });

	    it('should have a bacon property', function () {
	    	expect(getsum.ipsumData).to.have.property("bacon");
	    });

	    it('should have a gibberish property', function () {
	    	expect(getsum.ipsumData).to.have.property("gibberish");
	    });

   	});

   	
    describe("characters()", function() {

        it("should return a string", function() {
            expect(getsum.characters(10)).to.be.a("string");
        });

        it("should return the correct number of characters", function () {
            expect(getsum.characters(10))
                .to.have.length(10)
                .and.to.be.a("string")
        });

        it('should end with a full stop', function () {
        	var string   = getsum.characters(10);
        	expect(string).to.match(/\.$/);
        });

        it('should start with an uppercase letter', function () {
            var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var firstCharacter = getsum.characters(10).charAt(0);
            var firstCharIsUpper = upperAlpha.indexOf(firstCharacter) > -1;

            expect(firstCharIsUpper).to.be.true;
        });

        it('should handle an invalid or missing count argument', function () {
            expect(getsum.characters()).to.have.length.above(0);
            expect(getsum.characters(-10)).to.have.length.above(0);
            expect(getsum.characters(0)).to.have.length.above(0);
            expect(getsum.characters(0.5)).to.have.length.above(0);
        });

        it('should accept options', function () {
            
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