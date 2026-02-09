

// For loop



// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 0; i<=10; i++){
//     console.log(i)
// }

// for(let i = 0; i<=10; i++){
//     if(i % 2 === 1){
//         console.log(i)
//     }
// }

// let forobj = ["one","two","three"]
// for(let i = 0; i < forobj.length; i++){
//     console.log(forobj[i])
// }

// let forobj2 = ["one","two","three","four","five","six"]
// for(let i = 0; i < forobj2.length; i++){
//     if(i % 2 === 4){
//         console.log(forobj2[i])
//     }
// }

// While loop

// let i = 0;
// while(i <= 10){
//     console.log(i)
//     i++
// }

// let i = 0;
// while(i <= 10){
//     console.log(i)
//     i++
// }

// let whileobj = ["1","two","3","four","5","six","7","eight"]
// let b = 0;
// while(b < whileobj.length){
//     console.log(whileobj[b])
//     b++
// }

// let whileobj = ["1","two","3","four","5","six","7","eight"]
// let b = 0;
// while(b < whileobj.length){
//     if(b % 3 === 0){
//         console.log(whileobj[b])
//     }
//     b++
// }

// Do While loop

// let i = 0;
// do{
//     console.log(i)
//     i++
// }while(i <= 10)

// let d = 0;
// do{
//     console.log(d)
//     d++
// }while(d <= 10)

// let dobj = ['o','a','b','c','d']
// let = db = 0;
// do{
//     console.log(dobj[db])
//     db++
// }while(db < dobj.length)
// let dobj = ['o','a','b','c','d']
// let = db = 0;
// do{
//  if(db % 2=== 0){
//     console.log(dobj[db])
//  }
//  db++
// }while(db < dobj.length)

// For in loop

// let person = {
//     name:"ali",
//     age: 21,
//     gender:"male",
// }

// for(let key in person){
//     console.log(key + ": " + person[key])
// }

// let arr = ['a','b','c','d']
// for(let i in arr){
//     console.log(i + ": "+ arr[i])
// }

// let person = {
//     name:"Niaz",
//     age:22,
//     gender:"Male",
// }

// for(let i in person){
//     console.log(i + ": "+ person[i])
// }
// let car ={
//     color:"red",
//     light:"massive",
//     run:"oil"
// }
// for(let i in car){
//     console.log(i + ": "+ car[i])
// }

// let obj = ["1","2","4","65"]
// for(let i in obj){
//     console.log(i+": "+obj[i])
// }

// let bigobj = ["one","two","three","four","five","six","seven","eight","nine"]
// for(let i in bigobj){
//     if(i % 2 === 1){
//         console.log(i+": "+bigobj[i])
//     }
// }

// For of loop

//  let myobj = ["one","two","three","four"]
//  for(let ob of myobj){
//     console.log(ob)
//  }

// let smallobj = ["t","o","r"]
// for(let i of smallobj){
//     console.log(i)
// }

// let okey = ["1","three","a","c","100"]
// for(let yes of okey){
//     if(yes % 2 === 3){
//         console.log(yes)
//     }
// }

// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let total = 7;
// switch (total) {
//   case 1:
//     console.log("this one");
//     break;
//   case 2:
//     console.log("this is good");
//     break;
//   case 7:
//     console.log("my bealive this one");
//     break;
//   default:
//     console.log("no one");
// }

// let totalemploy = 14; <========= this 14 and 

// switch (totalemploy) {
//   case 2:
//     console.log("no employ here");
//     break;
//   case 4:
//     console.log("yes total 14 employ");
//     break;
//   case 14: <============================== this one matchable 
//     console.log("working this one <="); // <======== this is the answer
//     break;
//   default:
//     console.log("no one");
// }


// setInterval(()=>{ // depend on time and repeatitive
//    console.log("wait") 
// },2000)
// setTimeout(()=>{ // depend on time only 
//    console.log("wait") 
// },2000)

// let firstarr = [1,2,3,4,5,6]
// let newarr = [...firstarr]
// newarr.push(7)
// console.log(firstarr)
// console.log(newarr)

// let arr1 = [1,2]
// let arr2 = [3,4]
// let margeboth = [...arr1 , ...arr2]
// console.log(margeboth)

// let fruit = ["apple","banana"]
// let fruit2 = [...fruit ,"mango","orange"]
// console.log(fruit)
// console.log(fruit2)

// api fetching and async await

// async function getdata() {
//   try {
//     const res = await fetch("https://api.coingecko.com/api/v3/ping");

//     if (!res.ok) {
//       throw new Error(`HTTP Error: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log("Error:", err.message);
//     return null;
//   }
// }

// getdata();


// async function getdata() {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log(data)
//         return data;
//     }catch{
//         console.log("Error :" , err.message)
//         return null
//     }
    
// }
// getdata()


// async function Getdata() {
//     try{
//         const res = await fetch("https://dummyjson.com/products")
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log(data)
//         return data
//     }catch{
//         console.log("Error :" , err.message)
//         return null
//     }
    
// }
// Getdata()



// async function Getdata() {
//     try{
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log(data);
//         return data;
//     }catch{
//         console.log("Error :" , err.message)
//         return null
//     }
    
// }
// Getdata()

// async function createPost() {
//   try {
//     const payload = {
//       title: "Hello",
//       body: "This is my first post",
//       userId: 1,
//     };

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP Error: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log("Created:", data);
//     return data;
//   } catch (err) {
//     console.log("Error:", err.message);
//     return null;
//   }
// }

// createPost();


// async function Postdata() {
//     try{
//         const payload ={
//             title:"fruits",
//             expiry:"2 years",
//             age:5
//         }
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//            method:"POST",
//            headers:{
//             "Content-Type":"application/json"
//            },
//            body: JSON.stringify(payload) 
//         });
//     if(!res.ok){
//         throw new Error(`HTTP Error ${res.status}`)
//     }
//     const data = await res.json();
//     console.log("Created :" , data)
//     return data;
//     }catch(err){
//     console.log("Error :", err.message)
//     return null
//     }
    
// }
// Postdata()



// async function PostData() {
//     try{
//         const payload={
//             user:"logedIn",
//             data:"2/6/2026",
//             age:22,
//         }
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log("Created :",data)
//         return data;
//     }catch(err){
//         console.log("Error :", err.message)
//         return null
//     }
    
// }
// PostData()

// async function postdata() {
//     try{
//         const payload={
//             name:"ali",
//             age:20,
//             role:"User"
//         }
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log("Created :",data)
//         return data
//     }catch(err){
//         console.log("Error :",err.message)
//         return null
//     }
    
// }
// // postdata()

// async function getdata() {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         if(!res.ok){
//             throw new Error (`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log(data)
//         return data
//     }catch(err){
//         console.log("Error :", err.message)
//         return null
//     }
    
// }
// getdata()

// async function updateapi(id) {
//     try{
//         const payload={
//             id:id,
//             title:"change name of",
//             body:"update body",
//             useId:1
//         };
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//             method:"PUT",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log("Updated :",data)
//         return(data)
//     }catch(err){
//         console.log("Error:",err.message)
//         return null
//     }
    
// }
// updateapi(1)

// async function patchapi(id) {
//     try{
//         const payload = {
//             title:"chane title"
//         }
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//             method:"PATCH",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Erorr ${res.status}`)
//         }
//         const data = await res.json();
//         console.log("Patched sucess",data)
//         return data
//     }catch(err){
//         console.log("Error :",err.message)
//         return null
//     }
    
// }
// patchapi()

// async function deletapi(id) {
//     try{
//       const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`,{
//         method:"DELETE"
//       })
//       if(!res.of){
//         throw new Error(`HTTP Error ${res.status}`)
//       }
//       console.log("Deleted" , id)
//       return true
//     }catch(err){
//         console.log("Error",err.message)
//         return false
//     }
    
// }
// deletapi(1)

// async function DeleteApi(id) {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/delete/${encodeURIComponent(id)}`,
//       { method: "DELETE" }
//     );

//     if (!res.ok) {
//       throw new Error(`HTTP Error ${res.status}`);
//     }

//     console.log("Delete success:", id);
//     return true;
//   } catch (err) {
//     console.log("Error:", err?.message || err);
//     return false;
//   }
// }


// async function DeleteMe(id) {
//     try{
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
//             method:"DELETE",
//         });
//        if(!res.ok){
//         throw new Error(`HTTP Error ${res.status}`)
//        }
//        console.log("delete done",id)
//        return true
//     }catch(err){
//         console.log("Error",err?.message || err)
//         return false
//     }
// }
// DeleteMe(1)

// async function Getdata() {
//     try{
//         const res = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN:9780140328721&format=json&jscmd=data")
//        if(!res.ok){
//         throw new Error (`HTTP Error ${res.status}`)
//        }
//        const data = await res.json();
//        console.log(data)
//        return data
//     }catch(err){
//         console.log("Error :",err.message)
//         return null
//     }
    
// }
// Getdata()

// async function Postapi() {
//     try{
//         const payload = {
//             title:"Book",
//             color:"Green",
//             total:"2000Rs"
//         }
//         const res = await fetch("https://httpbin.org/post",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json()
//         console.log("Data Posted Sucessfully",data)
//         return data
//     }catch(err){
//         console.log("Error :", err?.message || err)
//         return null
//     }
    
// }
// await Postapi();

// function abc(callback){
//     console.log("hello")
//     callback()
// }
// abc(()=>{
//     console.log("done")
// })

// async function Getdata() {
//     try{
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         if(!res.ok){
//             throw new Error (`HTTP Error ${res.status}`)
//         }
//         const data = await res.json();
//         console.log(data)
//         return data
//     }catch(err){
//         console.log("Error :", err?.message || err)
//         return null;
//     }
    
// }
// await Getdata()

// for(let i = 10; i <= 20; i++){
//     console.log(i)
// }

// let i = 10
// while(i <= 20){
//     console.log(i)
//     i++

// }

// let d = 10;
// do{
//  console.log(d)
//  d++
// }while(d <= 20)

// let arr = ["apple","banana","mango","graphs"]
// for(let i in arr){
//     console.log(i + ": " + arr[i])
// }

// let objects = {
//     name:"ali",
//     age:20,
//     profession:"FullStack WebDeveloper"
// }

// for(let i of objects){
//     console.log(i)
// }

// async function PostData() {
//     try{
//         const payload={
//             name:"Apple",
//             color:"red",
//             tast:"sweet"
//         }
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"Application/json"
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json()
//         console.log("Created :" , data)
//         return data
//     }catch(err){
//         console.log("Error :", err?.message || err)
//         return null;
//     }
    
// }
// await PostData()


// async function PostData() {
//     try{
//         const payload = {
//             CarName:"ToyoTa",
//             CarColor:"Black",
//             Engine:"new",
//             Price:"800000"
//         }
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"Application/json"
//             },
//             body: JSON.stringify(payload)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json()
//         console.log("Created :", data)
//         return data
//     }catch(err){
//         console.log("Error :", err?.message || err)
//         return null
//     }
    
// }
// await PostData()


// async function GetBooks() {
//     try{
//         const res = await fetch(`https://api.itbook.store/1.0/new`)
//         if(!res.ok){
//             throw new Error(`HTTP Error ${res.status}`)
//         }
//         const data = await res.json()
//         console.log(data)
//         return data
//     }catch(err){
//         console.log("Error :",err?.message || err)
//         return null
//     }
    
// }
// await GetBooks()

