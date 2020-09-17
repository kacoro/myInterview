// 实现$atrr(name,value)遍历 (属性选择器)
// 属性位name
// 值为value的元素集合


function test1(){
    function $attr(property,value){
        let elements = document.getElementsByTagName('*')
        arr = [];
        // [].forEach.call(elements,item=>{
        // })
        elements = Array.from(elements); //非数组转换位数组
        elements.forEach(item =>{
            let itemValue = item.getAttribute(property);
            if(property==='class'){
                //=>样式类属性名要特殊处理
                new RegExp("\\b"+value+"\\b").test(itemValue)?arr.push(item):null
                return
            }
            //=>存储的是当前元素property对应的属性值
           
            if(itemValue ===value){
                arr.push(item)
            }
        })

        return arr
    }
//   例如下面实例
  var ary = $attr('id','AA')
  var ary2 = $attr('class','box') 
  var ary3 = $attr('myIn','2')
    console.log(ary)
    console.log(ary2)
    console.log(ary3)

}


test1()