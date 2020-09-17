// 函数柯里化 :预先处理的思想(利用闭包的机制)
/* 实现
add(1);
add(1)(2);
add(1)(2)(3);
add(1,2);

*/
function currying(fn,length){
    length = length || fn.length;
    return function(...args){
        if(args.length >=length){
            return fn(...args)
        }
        return currying(fn.bind(null,...args),length - args.length)
    }

}

let add = currying((...arg)=>eval(arg.join('+')),3)


console.log(add(1)(2))
console.log(add(1)(2)(3))
console.log(add(1)(2,3))
console.log(add(1,2)(3))


var currying = function (fn) {
    var _args = [];
    return function () {
     if (arguments.length === 0) {
      return fn.apply(this, _args);
     }
     Array.prototype.push.apply(_args, [].slice.call(arguments));
     return arguments.callee;
    }
   };
   var multi=function () {
    var total = 0;
    for (var i = 0, c; c = arguments[i++];) {
     total += c;
    }
    return total;
   };
   var sum = currying(multi); 
   sum(100,200)(300);
   sum(400);
   
   console.log(sum())