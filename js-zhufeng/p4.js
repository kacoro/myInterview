/* 如何把一个字符串的大小写取反 */
let str = "Kacoro的中文名为陈卫杰。哈哈哈*100！haha。HAHA。"
function test1(){
    for(let i=0;i<str.length;i++){
    }
}
function test2(){
    str = str.replace(/[a-zA-Z]/g,(content)=>{
        //=>content:每一次正则匹配的结果
        return content.toUpperCase()===content?content.toLowerCase():content.toUpperCase()

        //验证是否为大写字母：把字母转换为大写后看和之前是否一样，之前也是大写的。在ASCII表中找到大写字母的取值范围进行判断； 'A‘.charCodeAt()  'Z‘.charCodeAt() 65-90 a-z:97-122
        //  console.log('z'.charCodeAt())
        // content.toUpperCase()===content
    })
    console.log(str)
}

test2()