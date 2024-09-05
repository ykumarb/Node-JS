import * as fs from "fs/promises";

// promises will allow us to write our code asynchronously
// Create directory / Folder
// Dealing with Promise API
try {
    await fs.mkdir("C:\\Users\\ykumar\\Desktop\\NODEBOY");
    await fs.mkdir("C:\\Users\\ykumar\\Desktop\\NODEBOY1\\NODE", {recursive: true});
    console.log("Directory Created");
} catch (error) {
    console.log(error);
}

// Read directory / Folder
try {
    const files = await fs.readdir("C:\\Users\\ykumar\\Desktop\\NODEBOY1");
    for (const file of files) {
        console.log(file);
    }
} catch (error) {
    console.log(error);
}

// Remove directory / Folder
try {
    await fs.rmdir("C:\\Users\\ykumar\\Desktop\\NODEBOY1\\NODE");
    console.log("Directory Removed");
} catch (error) {
    console.log(error);
}

// Create and write files 

// Write File (Will replace if new text comes in)
try {
    await fs.writeFile("C:\\Users\\ykumar\\Desktop\\NODEBOY\\index.js", "console.log('Hello World');");
    console.log("File Created");
} catch (error) {
    console.log(error);
}

// Read file ( without utf-8 it will give buffer in hex format)
try {
    const data = await fs.readFile("C:\\Users\\ykumar\\Desktop\\NODEBOY\\index.js", "utf-8");
    console.log(data);
} catch (error) {
    console.log(error);
}


// Append a data to file
try {
    await fs.appendFile("C:\\Users\\ykumar\\Desktop\\NODEBOY\\index.js", "console.log('Hello World 2');");
    console.log("File appended with data");
} catch (error) {
    console.log(error);
}

// Copy File
try {
    await fs.copyFile("C:\\Users\\ykumar\\Desktop\\NODEBOY\\index.js", "C:\\Users\\ykumar\\Desktop\\NODEBOY\\index2.js");
    console.log("File copied");
} catch (error) {
    console.log(error);
}

// Get file information
try {
    const stats = await fs.stat("C:\\Users\\ykumar\\Desktop\\NODEBOY\\index.js");
    console.log(stats);
    console.log(stats.isDirectory());
    console.log(stats.isFile());
} catch (error) {
    console.log(error);
}