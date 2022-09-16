const fs = require("fs");
fs.readFile("palm", "utf8", (_, t) => console.log(t));
