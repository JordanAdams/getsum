var _  = require('underscore');
var FS = require('fs');
var S  = require('string')

/**
 * Main Getsum "class"
 */
function Getsum() {

    this.ipsumData = require('./data/ipsum.json');

    this.options = {
    	flavour: 'lorem'
    }

    this.getIpsum = function(flavour) {
    	if (!this.ipsumData[flavour]) {
    		throw new Error(flavour + ' is not a valid ipsum flavour.');
    	}

    	return this.ipsumData[flavour];
    }

    this.sentenceify = function(string) {

  	 	// Captalise
  		string = S(string).capitalize().s;

  		// Make string into char array
  		stringCharArray = string.split('');

        // Make last char "."
  		stringCharArray[stringCharArray.length - 1] = '.';

        // Join together string
  		string = stringCharArray.join('');

  		// Return it
  		return string;

    }

}


/**
 * Gets ipsum with the given number of characters
 * @param  {Number} count - Number of characters
 * @return {String}       - Resulting string
 */
Getsum.prototype.characters = function(count) {
    
	var options = this.options;

    // Invalid or no count given?
   	if (!typeof count === 'Number' || Math.floor(count) < 1) {
   		count = _.random(1, 100);
   	}

   	// Get ipsum data
   	var ipsum = this.getIpsum(options.flavour);

   	// Shuffle ipsum words
   	ipsum = _.shuffle(ipsum);

   	// Join ipsum words with spaces
   	ipsum = ipsum.join(' ');

   	// Clip back to count
   	ipsum = ipsum.substr(0, count);

   	// Sentenceify
   	ipsum = this.sentenceify(ipsum);

    return ipsum;

}


/**
 * Gets ipsum with the given number of words
 * @param  {Number} count - Number of words
 * @return {String}       - Resulting string
 */
Getsum.prototype.words = function(count) {
    
	var options = this.options;

	// Invalid or no count given?
	if (!typeof count === 'Number' || Math.floor(count) < 1) {
		count = _.random(1, 100);
	}

	// Get ipsum data
	var ipsum = this.getIpsum(options.flavour);

	// Clip down ipsum words to requested amount
	ipsum = _.sample(ipsum, count);

	// Join words with spaces
	ipsum = ipsum.join(' ');

	// Sentenceify
	ipsum = this.sentenceify(ipsum);

	return ipsum

},


module.exports = new Getsum;