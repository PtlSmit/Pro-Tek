class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    change_name(new_name){
        this.name=new_name;
    }
    older(){
        this.age++;
    }
     younger(){
        this.age--;
    } 
};

let p1= new person ("John",23)
p1.change_name('Bob');
p1.older();
p1.younger();
console.log(p1.name);
console.log(p1.age);
