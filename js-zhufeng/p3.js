/*
箭头函数与普通函数的区别是什么？构造函数可以使用new生成实例，那么箭头函数可以吗？为什么？
*/

/*  箭头函数和普通函数的区别
1. 语法上更加简洁
2. 箭头函数没有自己的this,它里面的this是继承所处上下文中的this,（使用call/apply等任何方式都无法改变this的指向）
3. 箭头函数中没有arguments(类数组)，只能基于...arg获取残敌的参数集合（）
4. 箭头函数不能被new执行（因为：箭头函数没有this，也没有prototype）
*/
function test1() {
    function fn(x) {
        return function (y) {
            return x + y
        }

    }

    let fn1 = x => {
        return y => {
            return x + y;
        }
    }
    // let fn = x =>y => x + y;
}

function test2() {

    let obj = {
        name: 'OBJ'
    }

    function fn1() {
        console.log(obj) //=> OBJ
    }
    let fn2 = () => {
        console.log(this) //=> window
    }
}
function test3() {
    document.body.onclick = () => {
        // this：window 不是操作的body
    }
    document.body.onclick = function () {
        /*  arr.sort(function(a,b){
             //=>this:window 回调函数中的this一般都是window
             return a-b
         }) */
        arr.sort((a, b) => {
            //=>this:body
            return a - b
        })
    }
}

// 更高级的forEach
// 回调函数，把一个函数B作为实参传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行N次,可以传值,可以改变this,）
function each(array, callback) {
    for (let index = 0; index < array.length; index++) {
        // let element = array[index];
        // callback(element,index);
        let flag = callback.call(array, array[index], index)
        // 接收回调函数返回的结果，如果是false，我们结束循环
        if (flag === false) break;

    }
}

each([10, 20, 30, 40], function (element, index) {
    console.log(element, index)
    if (index > 1) {
        return false;
    }
})

// 扩展写一个each放在数组上


// 箭头函数没有arguments
function test4() {
    function fn() {
        console.log(arguments)
    }
    let fn1 = (...arg) => {
        console.log(arguments)
        console.log(arg)
    }
    fn(10, 20, 30)
    fn1(10, 20, 30)
}

function test5() {
    function Fn() {
        this.x = 100;
    }
    Fn.prototype.getX = function () { };
    let f = new Fn;
    console.dir(Fn)

}
function test6() {
    let Fn = () => {
        this.x - 200;
    }
    Fn.prototype.getX = function () { };
    let f = new Fn; //TypeError: Fn is not a constructor


}
test5()
test6()

// 思考题
// 1.each
function tesat7() {
    let arr = [10, 20, 30, 'AA', 40],
        obj = {}
    arr = arr.each((item, index) => {
        //=>this:obj(each第二个参数不传，this是window即可)
        if (isNaN(item)) {
            return false;//=> 如果return的是false，则结束当前数组
        }
        return item * 10;//=> 返回的结果是啥，就把数组中当前项替换成啥
    }, obj);
    // arr = [100,200,300,'AA',40]
}


//2.replace 重写这个方法，实现和内置一模一样的效果（只需要考虑 replace([reg],[callback])）
function tesat7() {
    let str = "kacoro2019kacoro2020";
    str = str.replace(/zhufeng/g, function (...arg) {
        //ARG中存储了每一次大正则匹配的信息和小分组匹配的信息
        return '@' //=>返回的是啥把当前正则匹配的内容替换成啥
    })

}
