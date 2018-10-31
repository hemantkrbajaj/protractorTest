import testFile from '../ConfigFiles/testFile.json';
console.log(Number(testFile.params.number2)+2)

let check:boolean= true
console.log(check)
let number:Number = 10
console.log(number)
let array:Number[]= [1,2,3,4,5,6]
console.log(array[1])
let list:Array<String>=["A","B","C"]
console.log(list[1])
let tuple:[Number,String]= [1,"A"]
console.log(tuple[1])
enum Color {red, green, blue}
let c : Color
console.log(Color.green) 

function firstFunction():void {
    console.log("First function")
}
firstFunction()

function nonVoidFunction():Number {
    let a: Number =5
    return a
}
console.log(nonVoidFunction())

//never use

function neverType(message:string) :never {
    throw new Error(message)
}

function fail(){
    return infiniteLoop()
}

function infiniteLoop():never {
    while (true) {
    }
}


