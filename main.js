const fs = require("fs/promises");
var failuMasivas = [];
async function main() {
    console.log("start");
    try {
        failuMasivas.push('./failai/a.txt');
        
    
        
    }
   finally {
    console.log(failuMasivas[0])
   }
    
}
main();