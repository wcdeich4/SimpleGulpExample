import { sayHello } from "./greet";
function showHello(divName: string, name: string) 
{
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}
showHello("greeting", "TypeScript with bundling and uglify!!!!!!!!!!!!!!!!1");
/*
function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
  }
  hello("TypeScript");
*/