import path from "path";

console.log(path.basename("c:\\Porgam Function\\index.js"));
console.log(path.dirname("c:\\Porgam Function\\index.html"));
console.log(path.extname("c:\\Porgam Function\\index.html"));

console.log(path.join("c:", "Program Files", "index.html", ".."));

console.log(path.basename("c:\\Porgam Function\\index.js", ".js"));

console.log(path.normalize("c:\\\\Porgam Function\\\Dirname\\index.js"));

console.log(path.parse("c:\\Porgam Function\\index.js").name);
console.log(path.parse("c:\\Porgam Function\\index.js").ext);
console.log(path.parse("c:\\Porgam Function\\index.js").dir);
console.log(path.parse("c:\\Porgam Function\\index.js").root);
console.log(path.parse("c:\\Porgam Function\\index.js").base);