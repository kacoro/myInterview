function Foo(){
    Foo.a = function(){ //函数重写
        console.log(1)
    }
    this.a = function(){//私有属性
        console.log(2)
    }
}
//=>把Foo当作类,在原型上设置实例公有的属性方法 => 实例.a();
Foo.prototype.a = function(){
    console.log(3)
}
//=>把Foo当作普通对象，设置私有的属性方法 => Foo.a();
Foo.a = function(){
    console.log(4)
}
Foo.a() //=>4
let obj = new Foo(); //实例obj可以调取原型上的方法 Foo.a:f=>1 obj.a:f=>2
obj.a()  //私有属性有a 不找公有的
obj.a
Foo.a()  //私有属性有a 被重写了

// 比阿里简单10倍。阿里的更难。


