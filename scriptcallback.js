console.log("harry is hacker");
console.log("rohan is hacker")
// asyn
setTimeout(() => {
    console.log("I am inside settimeout")
},2000);

setTimeout(() => {
    console.log("I am inside settimeout 1")
},2000);

console.log("the end");


// callback 

const fn = () => {
    console.log("nothing")
    
}

const callback = (arg,fn)=> {
    console.log(arg)
    fn()
    
}

const loadScript = (src,callback) => {
   let sc= document.createElement("script");
    sc.src = src;
    sc.onload =callback("harry",fn); 
    document.head.append(sc)
}

loadScript("https://www.youtube.com/watch?v=9JaDBYPmiJ0&t=805s",callback)
