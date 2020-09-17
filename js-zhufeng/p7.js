// 判断输入的是一个正确的网址
let str="https://www.zhufengpeixun.cn/stu?type=1#video";
/* URL格式
1.协议:// http/https/ftp
2.域名*
//www.kacoro.com
// kacoro.com
// xjx.company.kacoro.com
3.请求路径
  /
  /index.html
  /stu/index.html
  /stu
4.问号传参

5.哈希值 */

function test1(str){
    // let reg = /^((http|https|ftp):\/\/)?(([\w-]+\.)+[a-z0-9]+)((\/[^/?#]*)+)?(\?[^#]+)?(\#.+)?$/i;
    let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(\#.+)?$/i;
    console.log(reg.exec(str))
    // ? 有或没有 i忽略大小写
    // 域名 数字字母下划线中杠出现多位 	\w 匹配字母、数字、下划线。等价于 [A-Za-z0-9_]
            // .出现1次或多次  (\.)+
            // 域名数字或字母[a-z0-9]+
            //请求路径 非斜杠 

            // ?:只匹配不捕获
}

test1(str)