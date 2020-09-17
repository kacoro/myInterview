// 实现 (5.add(3).minus(2)) 输出6

~ function(){
    //=>都要返回Number这个类的实例，才可以继续调取Num类中的方法（原形中的链式写法）
    function check(n){
        n = Number(n);
        return isNaN(n)?0:n;
    }
    function add(n){
        n = check(n);
        return this + n;
    }
    function minus(n){
        n = check(n);
        return this - n;
    }
    Number.prototype.add = add
    Number.prototype.minus = minus
    // ["add","minus"].forEach(item=>{
    //     Number.prototype[item]=eval(item)
    // })
}()

console.log((5).add(3).minus(2))
