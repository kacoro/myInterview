// 编写一条正则，用来验证此规则：一个6~16位的字符串，必须同时包含大小写字符和数字
// 正则深度教材 珠峰培训Javascript正则表达式五废话教材
// 正向预查(?=pattern)和负向预查(?!pattern)  只设置条件不参与捕获
function test1(){
  
    var reg = /zhufeng(?=peixun)/;
    var str = 'zhufengpeixun'
    console.log(reg.exec(str)) //匹配到zhufeng而不是peixun
    var reg = /zhufeng(?=peixun)/;
    var str = 'zhufengonline'
    console.log(reg.exec(str)) //返回null
    var reg = /zhufeng(?=peixun)/;
    var str = 'onlinepeixun' //返回null
    console.log(reg.exec(str)) //返回null
}

function test2(){
    var reg = /zhufeng(?!peixun)/;
    var str = 'zhufengpeixun'
    console.log(reg.exec(str)) //返回null
    var reg = /zhufeng(?!peixun)/;
    var str = 'zhufengonline'
    console.log(reg.exec(str)) //返回zhufeng
    var reg = /zhufeng(?!peixun)/;
    var str = 'onlinepeixun' //
    console.log(reg.exec(str)) //返回null
}

function test3(){
   var reg1 = /(?=^)\d{2}(?=$)/  //两位数必须开头 两位数的右边必须结尾
   var reg2 = /^\d{2}$)/
}
let reg = /^(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)[a-zA-Z0-9]{6,16}$/  //不能是纯小写字母,不能是纯大写字母,不能是纯数字
let reg1 = /(?![a-zA-z]+$)(?![0-9]+$)(?![a-z0-9]+$)(?![A-Z0-9]+$)^[a-zA-Z0-9]{6,16}$/  //这条才是正确的,先写好

function test4(test){
    console.log(test.test('aaaaaa'))
    console.log(test.test('AAAAAA'))
    console.log(test.test('1111111'))
    console.log(test.test('aaaAAA'))
    console.log(test.test('aaa111'))
    console.log(test.test('AAA111'))
    console.log(test.test('aaaAAA111'))
}

// test4(reg)

// 1-10位 数字字母下划线 必须得有下划线

let reg3 = /(?=_)\w{1,10}$/
let reg4 = /(?!^[a-zA-Z0-9]+$)^\w{1,10}$/
function test5(test){
    console.log(test.test('aaaaaa'))
    console.log(test.test('AAAAAA'))
    console.log(test.test('1111111'))
    console.log(test.test('aaaAAA'))
    console.log(test.test('aaa111'))
    console.log(test.test('AAA111'))
    console.log(test.test('aaaAAA111'))
    console.log(test.test('aaaAAA1_11'))
    console.log(test.test('_'))
    console.log(test.test('1_'))
}
test5(reg3); test5(reg4)