// 1.介绍npm模块安装机制,为什么输入npm install就可以自动安装对应的模块
/* package.json
执行工程自身 preinstall
当前 npm 工程如果定义了 preinstall 钩子此时会被执行。

确定首层依赖模块
首先需要做的是确定工程中的首层依赖，也就是 dependencies 和 devDependencies 属性中直接指定的模块（假设此时没有添加 npm install 参数）。

工程本身是整棵依赖树的根节点，每个首层依赖模块都是根节点下面的一棵子树，npm 会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。

获取模块

获取模块是一个递归的过程，分为以下几步：
获取模块信息。在下载一个模块之前，首先要确定其版本，这是因为 package.json 中往往是 semantic version（semver，语义化版本）。此时如果版本描述文件（npm-shrinkwrap.json 或 package-lock.json）中有该模块信息直接拿即可，如果没有则从仓库获取。如 packaeg.json 中某个包的版本是 ^1.1.0，npm 就会去仓库中获取符合 1.x.x 形式的最新版本。
获取模块实体。上一步会获取到模块的压缩包地址（resolved 字段），npm 会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。
查找该模块依赖，如果有依赖则回到第1步，如果没有则停止。
模块扁平化（dedupe） 
*/


// 2.输出一下代码的执行结果并解释为什么?
function test1(){
    var a= {n:1};
    var b = a; //引用
    a.x = a = {n:2}
    console.log(a,b)
    console.log(a.x) // undefined
    console.log(b.x) //{n:2}

// 连等开始之前程序会把所有引用都保存下来
// 连等的过程中,这些值不变
// 等到整个连等都才执行
}





// 3.数组里面有10万个数据,取第一个元素和第10玩个元素的时间相差多少
// 完全一样
// 数组是随机访问
// 数组的寻址操作

// 4.有以下3个判断数组的方法,请分别介绍他们之间的区别和劣势
// Object.prototype.toString.call(), instanceof 以及Array.isArray()
function test4(){
    var arr = [1,2,3]
    console.log(Object.prototype.toString.call(arr)==='[object Array]')
    // Object.prototype.toString.call()常用于判断浏览器内置对象。
    /* 每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话，会返回 [Object type]，
    其中 type 为对象的类型。但当除了 Object 类型的对象外，其他类型直接使用 toString 方法时，
    会直接返回都是内容的字符串，所以我们需要使用call或者apply方法来改变toString方法的执行上下文 */
    // 优点：这种方法对于所有基本的数据类型都能进行判断，即使是 null和defined,且和下面的Array.isArray方法一样都检测出 iframes；
    // 缺点：不能精准判断自定义对象，对于自定义对象只会返回[object Object]

    console.log(arr instanceof Array)
    /* nstanceof 的内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。

    使用 instanceof判断一个对象是否为数组，instanceof 会判断这个对象的原型链上是否会找到对应的 Array 的原型，找到返回 true，否则返回 false */
    /* 缺点： instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true，且不同于其他两种方法的是它不能检测出iframes。

    优点：instanceof可以弥补Object.prototype.toString.call()不能判断自定义实例化对象的缺点。 */
    console.log(Array.isArray(arr))
    //  优点：当检测Array实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 和Object.prototype.toString.call可以检测出 iframes，而instanceof不能

}

// 5.使用sort()对数组[3,15,8,29,102,22]进行排序,输出结果
let arr = [3,15,8,29,102,22]
arr.sort()//默认是对字符串排序
console.log(arr) //[ 102, 15, 22, 29, 3, 8 ]
arr.sort((a,b)=>a-b)
console.log(arr) //[ 3, 8, 15, 22, 29, 102 

//6. react-router里面的 <link> 标签和a 标签有什么区别,如何禁止a标签的默认事件,之后如何实现跳转
{/* <Link> web\rn\后台  link是一个组件，用处也是页面内跳去
通过router-link进行跳转不会跳转到新的页面，不会重新渲染，它会选择路由所指的组件进行渲染
<a> web  点击a标签从当前页面跳转到另一个页面
通过a标签跳转，页面就会重新加载，相当于重新打开了一个网页
通过a标签和router-link对比，router-link避免了重复渲染，不像a标签一样需要重新渲染减少了DOM性能的损耗 */}
{/* <a href="/"
onclick={
    ev=>{
        ev.preventDefault()
        history.push('/')
    }
} >
</a> */}

/* 7 实现一个sleep
可以从Promise\Generator\Async/Await等角度实现 */

async function  test7() {
    console.time('sleep')
    function sleep(ms){
        return new Promise(resolve,reject=>{
            setTimeout(resolve,ms)
        })
    }
    
    await sleep(2000);
    console.timeEnd('sleep')
}

test7()

