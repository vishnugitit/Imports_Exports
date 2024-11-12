// a, a1, a2 all are the references that stores a value

    a = require("./index.js");
    console.log(a);     //  20

    a1 = require("./index.js");
    a1 = 100;
    console.log(a1);    //  100

    const a2 = require("./index.js");
    console.log(a2());  //  8

    // var b=require("./index.js")
    // console.log(b)