let x = new Promise((resolve,reject) =>{
    let a = parseInt(prompt("Enter the Value of:"));
    let b =parseInt(prompt("Enter the Value of:"));
    if (a&b >0){
        resolve("Your answer is:",'a+b' )
    }else{
        reject("Your anser is:", b-a)
    }
})
x.then((a,b) =>{
    document.write("Your answer is:", Answer)
}).catch((Answer)=>
{
    document.write("Your answer is:" , Answer)
})