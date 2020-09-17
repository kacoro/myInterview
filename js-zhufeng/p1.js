
// call和apply 都是用来修改函数中this的指向问题；
/**
它们不同的传参方式：注意上一句话中说他们的作用时有两个关键词 ‘函数’和‘this’，想要修改this 的指向，那么必然有一个this修改后的指向，而函数必然后关系到传参问题：call方法可以传给该函数的参数分别作为自己的多个参数，而apply方法必须将传给该函数的参数合并成一个数组作为自己的一个参数：
*/
const num =10000
function fn(x,y,z){ } 
const person = {
    name: 'YuTengjing',
    age: 22,
    introduce() {
        // console.log(`Hello everyone! My name is ${this.name}. I'm ${this.age} years old.`);
    }
};
// console.log(person.introduce());

function displayHobbies(...hobbies) {
    // console.log(`${this.name} likes ${hobbies.join(', ')}.`);
}
var  hobbies = ['swimming', 'basketball', 'anime']


function demo1(){
   displayHobbies.call({ name: 'Bob' }, ...hobbies); // => // => Bob likes swimming, basketball, anime. 
}
function demo2(){
   displayHobbies.apply({ name: 'Bob' }, hobbies); // => Bob likes swimming, basketball, anime. 
}
function demo3(){
    displayHobbies.call({ name: 'Bob' }, 'swimming', 'basketball', 'anime'); // => Bob likes swimming, basketball, anime. 
 }
 function demo4(){
    displayHobbies.call({ name: 'Bob' },['swimming', 'basketball', 'anime']); // => Bob likes swimming, basketball, anime. 
 }

function test(name,fn){
    console.time(name)
    for (let i = 0;i<num;i++){
        fn()
    }
    console.timeEnd(name)
}


// test('demo1',demo1)
// test('demo2',demo2)
// test('demo3',demo3)
test('demo4',demo4)
