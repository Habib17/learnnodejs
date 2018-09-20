var fs = require('fs');

fs.unlink('TestFile.txt', function () {
    
    console.log('delete operation complete.');

});