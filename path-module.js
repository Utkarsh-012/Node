const path = require('path')

// A seperator that seperates according to the platfrom
console.log(path.sep)

const filePath = path.join('/content/' , 'subfolder' , 'test.txt')
console.log(filePath)

const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt')
console.log(absolute)