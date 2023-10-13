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