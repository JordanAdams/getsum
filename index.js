var _  = require('underscore');
var FS = require('fs');
var S  = require('string')


var Utils = {
    
    randomLetter: function() {
        var alpha = 'abcdefghijklmnopqrstuvwxyz';
        return alpha.charAt(Math.floor(Math.random() * alpha.length));
    }

}


/**
 * Main Getsum "class"
 */
function Getsum() {

    this.ipsumData = loadFileContents('./data/lorem-ipsum.txt');

    this.splitToWords = function() {
    	return this.ipsumData.split(' ');
    }

	function loadFileContents(filename) {
	    var file = FS.readFileSync(filename, {
	        encoding: 'utf8'
	    });
	    return file;
	}

}


/**
 * Gets ipsum with the given number of characters
 * @param  {Number} count - Number of characters
 * @return {String}       - Resulting string
 */
Getsum.prototype.characters = function(count) {
    
    var ipsum = this.ipsumData.substr(0, count);

    // Get 2nd last char info
    var secondLastCharIndex = ipsum.length - 2;
    var secondLastChar      = ipsum.charAt(secondLastCharIndex);

    // Get a random char if 2nd last char isn't alphabetical
    if (!S(secondLastChar).isAlpha()) {
        secondLastChar = Utils.randomLetter();
    }

    // Replace 2nd last char
    ipsum = ipsum.slice(0, secondLastCharIndex)
            + secondLastChar.toLowerCase()
            + ipsum.slice(secondLastCharIndex+1);

    // Get last char index
    var lastCharIndex = ipsum.length - 1;

    // Replace last char with a "."
    ipsum = ipsum.slice(0, lastCharIndex)
            + "."
            + ipsum.slice(lastCharIndex+1);

    return ipsum;

}


/**
 * Gets ipsum with the given number of words
 * @param  {Number} count - Number of words
 * @return {String}       - Resulting string
 */
Getsum.prototype.words = function(count) {
    var wordsArray = this.splitToWords();
    return wordsArray.slice(0, count).join(' ');
},


module.exports = new Getsum;