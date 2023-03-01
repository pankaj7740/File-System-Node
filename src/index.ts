// console.log(123)
import * as fs from 'fs';
import * as path from "path";


// Write your logic inside the index.ts file
// You have to create a file named "task.txt" at this path "/assets/public/files"
// - You must create the two folders "public" & "files" by the FS module only
// - These folders must be auto created when app starts
// Once the file is created write your introduction (10 lines) into this "task.txt" file.
// Add 5 empty spaces into the file "task.txt".
// Add you name at the of the file "task.txt".
// Read the file and printout the content on the console
// Remove the file at the end of all the above tasks

const folder = path.join("assets","public","files");
const file = `${folder}/task.txt`;
const space  = ' '.repeat(5);
let text = "Through out this course our aim will be to read, implement and practically learn NodeJS. You have to start the course from Day 1 without skipping any module. Take care of the following points before you begin You have to go through each and every single topic mentioned";
const name = "Hi, This is Pankaj";

const createFolder = (folder: fs.PathLike)=>{
    fs.mkdir(folder,{recursive:true},(err)=>{
        if(err)
        throw err;
        console.log("folder created");

    })
    
}

// createFolder(folder)

const createFile = (file:fs.PathLike,text:string)=>{
    fs.writeFile(file,text,(err)=>{
        if(err)
        throw err;

        console.log("file created");
    })
    
}

// createFile(file,text);

const emptySpaces = (file:fs.PathLike,space:string)=>{
    fs.appendFile(file,space,(err)=>{
        if(err)
        throw err;

        console.log("Empty Spaces added");

    });

}

// emptySpaces(file,space);

const addNameOnTop = (file:fs.PathLike,name:string)=>{
    
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err)throw err;

        const originalData = data;

        const updatedData = name.concat(originalData);

        fs.writeFile(file,updatedData,(err)=>{
            if(err)
            throw err;
            console.log("content added on top")
        })
        

    })

}

// addNameOnTop(file,name);


const readFile = (file:fs.PathLike)=>{

        fs.readFile(file,"utf-8",(err,data)=>{
        if(err)
        throw err;

        console.log(data);
    })
}
// readFile(file)
    

const deleteFile = (file:fs.PathLike)=>{
        fs.unlink(file,(err)=>{
        if(err)
        throw err;
        console.log("file deleted");
    });

}
// deleteFile(file);





