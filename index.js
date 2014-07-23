var _  = require('underscore');
var FS = require('fs');
var S  = require('string')


/**
 * Main Getsum "class"
 */
function Getsum() {

    this.ipsumData = fileLoader('./data/lorem-ipsum.txt');

    this.splitToWords = function() {
    	return this.ipsumData.split(' ');
    }

	function fileLoader(filename) {
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

    // Check if 2nd to last letter is lowercase
    if (!S(ipsum).right(2).charAt(0).isLower()) {
    	
    }

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