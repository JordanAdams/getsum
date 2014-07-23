var expect = require("chai").expect;
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

    });

    describe("words()", function () {
        
        it("should return a string", function () {
            expect(getsum.words()).to.be.a("string");
        });

    });

});