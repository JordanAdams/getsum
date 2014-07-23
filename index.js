var _  = require('underscore');
var fs = require('fs');

function fileLoader(filename) {
    var file = fs.readFileSync(filename, {
        encoding: 'utf8'
    });
    return file;
}

var Getsum = {
    ipsumData: fileLoader('./data/lorem-ipsum.txt'),

    characters: function(count) {
        return this.ipsumData.substr(0, count)
    }
}


module.exports = Getsum;