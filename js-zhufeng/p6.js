// 输出下面代码运行结果

function test1(){
    var a={},b='123',c=123
    a[b]='b'; //a['123']='b
    a[c]='c'; //a[123] = c
    console.log(a[b]) //=>c a["123"] <=>a[123]。
}
function test2(){
    var a = {}, b = Symbol('123'), c = Symbol('123'); //Symbol是ES6中吸能的数据类型 typeof Symbol('123')==="symbol"特殊的数据类型，是个唯一的值
   
    a[b]='b';  //a[Symbol(123)]='b'
    a[c]='c';  //a[Symbol(123)]='c'
    console.log(a[b])  //=>b
}
function test3(){
    var a={}, b={key:'123'}, c={key:'456'}
    a[b]='b';  //a[objec]='b'
    a[c]='c';  //a[Symbol(123)]='c'
    console.log(a[b])  //=>c
}
function test4(){
    var obj={100:'kacoro',"100":'hahaha'}
    console.log(obj[100]) //=>kacoro 数字属性名和字符串属性名一致
    console.log(obj['100'])//=>kacoro
    var obj={100:'kacoro',"100":'hahaha'}
    console.log(obj[100]) //=>kacoro 数字属性名和字符串属性名一致
    console.log(obj['100'])//=>kacoro
}
function test5(){
    console.log(Symbol('123')==Symbol('123'))
    console.log(typeof Symbol('123')) 
    // 1.对象的属性名不能是一个对象（遇到对象属性名，会默认转换为字符串）
    // obj={} arr=[12,23] obj[arr] obj=>{"12,23":"珠峰"}
    // 2.普通对象.toString()调取的是Object.prototype上的方法（这个方法是用来检测数据类型的。）
    var obj={}; console.log(obj.toString() ) //[object Object]
}
test1()
test2()
test3()
test5()
