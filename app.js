const path = require('path');
const fs = require('fs');
const eventEmitter = require('events');
const myEmitter = new eventEmitter();
const os = require('os');


//________________________Q1________________________//

console.log("File: " + path.resolve(__filename));
console.log(" Dir: " + path.dirname(__filename));

//________________________Q2________________________//

let inp = "/user/files/report.pdf";

function getBaseName(inp) {
    return path.parse(inp).base;
}

console.log(getBaseName(inp));

//________________________Q3________________________//

let object = {
    dir: "/folder", 
    name: "app", 
    ext: ".js"
}

const filePath = path.format(object);

console.log(filePath);

//________________________Q4________________________//

let filePath2 = " /docs/readme.md";

const fileext = path.extname(filePath2);

console.log(fileext);

//________________________Q5________________________//

let filePath3 = "/home/app/main.js";

const filenameWithExt = (x) => {
    let sol = {
        Name : path.parse(x).name,
        Ext : path.parse(x).ext
    }
    return sol;
} 

console.log(filenameWithExt(filePath3));

//________________________Q6________________________//

let filePath4 = "/home/user/file.txt";

path.isAbsolute(filePath4) ? console.log("true") : console.log("false");

//________________________Q7________________________//

let filePath5 = path.join( "src", "components", "App.js");

console.log(filePath5);

//________________________Q8________________________//

let filePath6 = "./index.js";

function toAbsolute(relativePath) {
    return path.resolve(relativePath);
}

console.log(toAbsolute(filePath6));


//________________________Q9________________________//


function joinPaths(path1,path2) {
    return path.join(path1, path2)
}

console.log(joinPaths("/folder1","folder2/file.txt"));


//________________________Q10_______________________//

fs.unlink("file.txt", (err) => {
    if (err) {
        // console.log("an error occurred:",err); 
    }
    else {
        console.log("file deleted");
    }
    
})

//________________________Q11_______________________//

try {
    fs.mkdirSync("testFolder");
    console.log("Success");
} catch (error) {
    // console.log("an error occurred:",error);
    
}

//________________________Q12_______________________//

myEmitter.on("start", () => {
    console.log("Welcome event triggered!");
});

myEmitter.emit("start");

//________________________Q13_______________________//

 myEmitter.on("login", (username) => {
    console.log("User logged in:",username);
    
})
myEmitter.emit("login","Ahmed");

//________________________Q14_______________________//

const content = fs.readFileSync("notes.txt", "utf-8")
console.log(content);

//________________________Q15_______________________//

const newContent = fs.writeFile("async.txt", "Async save", (err) => {
    if (err) {
        console.log("an error occurred",err);
        
        
    }
    else {
        console.log("success");
        
    }
});

//________________________Q16_______________________//

const booleanValue = fs.existsSync("./notes.txt")
console.log(booleanValue);

//________________________Q17_______________________//

function osArch() {
    const output = {
        Platform: os.platform(),
        Arch:os.arch()
    }

    console.log(output);
    
}
osArch();