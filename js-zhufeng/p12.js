// 英文字母汉字组成的字符串,用正则给英文单词前后加空格

let str = 'no作no死,你能你do,不能no哔哔'


function test1(){
  var reg=/\b[a-z]+\b/ig //g全局匹配 i忽略大小写
  str= str.replace(reg,content=>{
    return " "+ content + " ";
  }).trim();  //去掉前后空格
  console.log(str)
}


test1()