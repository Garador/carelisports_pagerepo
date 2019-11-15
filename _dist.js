let fs = require("fs");

//Replaces the route.
let indexHTML = fs.readFileSync("../../dist/carelisportspage/index.html").toString();

let changedIndexHTML = indexHTML
.replace(/(href\=\")/g,`href="./`)
.replace(/(src\=\")/g,`src="./`)
.replace(/(href\=\".\/\/)/g, `href="./`);

fs.writeFileSync("../../dist/carelisportspage/index.html", changedIndexHTML);