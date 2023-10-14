"use strict";
// Excercise -15
// Excercise -14
// enum is set of value when use variable and function use under enum 
// enum Day{
//     // mon="mon",tue="tue"
//     mon,tue,wed,thu,fri,sat,sun
// }
// function whichDay(Days:Day){
// return Days
// }
// // whichDay=Day.tue 
// console.log(whichDay(Day.mon));
// Excercise -13
// generics those programme which is reuse those r Generics
// function users<T>(data:T):T{
//     return data;   //yha koi or output nhi aa sakta
// }
// console.log(users("anil "));
// Excercise -12
// part-1 index.ts 
// modules is block of code ... like class and function  if use module same name of function and class can use
// import sLogin from './student'
// import tLogin from './teacher'
// let teacher =new tLogin();
// console.log(teacher.data);
// let student =new sLogin();
// console.log(student.data);
// // part-2 student.ts 
// export default class login{
//     data="login done"
// }
// // part-3 teacher.ts 
// export default class login{
//     data="login done"
// }
// Excercise -11
// index.ts part-1
// Namespace not use more use in older times 
//  namespace is block of code which is user related data
// output given in out.js
// ///<reference path='./utiles.ts' />
// namespace usersUtils{
//     export class users extends Parent{
//         getName():string{
//             return this.name
//         }
//     }
// }
// let h1=new usersUtils.users();
// h1.setName("tonny")
// console.log(h1.getName());
// utiles.ts part-2
// namespace usersUtils{
//     export class Parent
//     {
//         name:any;
//         setName(name:string)
//         {
//             return this.name=name
//         }
//     }
// }
// Excercise -10
// inheritance 
// child inherit some property from preant those called inheritance
// class Parent{
//     name:any;
//     setName(name:string):void{
//         this.name=name;
//     }
// }
// class child extends Parent{
//     getName():string{
//         return this.name;
//     }
// }
// let h1=new child();
// h1.setName("peter")
// console.log(h1.getName());
// Excercise -9
// Class 
// class App{
//     name:string="niraj singh";
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{    //if nothing to return use void 
//         // console.log(this.name);
//         return this.name
//     }
// }
// let a1=new App('niraj');
// console.log(a1.getName());
// Excercise -8
// Function 
// function calc(n1:number,n2?:number):number{
//     return n2?n1+n2:n1
// }
// console.log(calc(10,50));
// Excercise -7
// INterfaace
// interface usersType{
//     name:string,
//     age:number,
//     getName:()=>string
// }
// let users:usersType={
//     name:"niraj",
//     age:30,
//     getName:function(){
//         return "neha singh"
//     }
// }
// console.log(users.getName());
// Excercise -6
// union types
// Allow group of data type 
// let data:number|string|boolean=90;
// data=true;
// console.log(data);
// Excercise -5
// interface usersType{
//     name:string,
//     email:string,
//     city:string
// }
// let users={
//     name:'brain',
//     email:'brain@gmail.com',
//     city:626
// }
// // users.name="200";
// console.log(users);
// Excercise -4
// let data:string[] | number[] = ["niraj","neha","ankit",100];
// data[2]=10
// console.log(data);
// Excercise -3
// let a:number=10;
// let b:string="niraj singh";
// let c:boolean=true
// console.log(a);
// console.log(b);
// console.log(c);
// Excercise -2
// let a:number=10;
// let b:string="niraj singh";
// let c:boolean=true;
// console.log(a);
// Excercise -1
// class App{
//     test(){
//         console.log("hello niraj");
//     }
// }
// let h1=new App();
// h1.test();  
