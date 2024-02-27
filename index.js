// 1st
const numbers = [2 ,4 ,6 , 8 , 10];
 numbers.forEach((number) => {
    console.log(number*2);
 })


//  2nd
const  fruits = ['apple' , 'banana' , 'cherry' , 'date'];

fruits.forEach((fruit, index) => {
   console.log(`${fruit} : ${index}` )  ;
})

// 3rd
const elements = [5 , 10 , 15 , 20 , 25];
const squaredElement = elements.map((element) => {
    return element ** 2;
});
console.log(squaredElement);


// 4th
const students = [
    {
        Name : "Ameer",
        Score : 90
    },
    {
        Name : "Ameerah",
        Score : 20
    },
    {
        Name : "Ameen",
        Score : 80
    }
];

const names = students.forEach((student => {
    console.log(student.Name);
} ))