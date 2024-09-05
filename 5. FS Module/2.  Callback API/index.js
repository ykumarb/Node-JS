import * as fs from "fs";

// Don't use try..catch block as we are not using promises here

fs.mkdir("C:\\Users\\ykumar\\Desktop\\NODEBOY", (error) => {
    if (error) throw error;
    console.log("Directory Created");
}); 

// Other way to write is below

fs.mkdir("C:\\Users\\ykumar\\Desktop\\NODEBOY", function (error) {
    if (error) throw error;
    console.log("Directory Created");
});