/* 实现一个字符串匹配算法，从字符串S中，查找是否存在字符串T，若存在返回所在位置，不存在返回-1（如果不能基于indexOf/includes等内置的方法，你会如何处理呢？） */

let S = "zhufengpeixun",
    T = "pei";
function test1(){
    ~ function(){
        /* 循环原始字符串的每一项，让每一项从当前位置向后截取T.length个字符，然后和T进行比较，如果不一样，继续循环；
            如果一样返回当前索引即可（循环结束）
        */
        function myIndexOf(T){
            //=>This:S
            let lenT = T.length,
                lenS = this.length,
                res = -1;
            if(lenT>lenS) return res;
            for(let i = 0;i<=lenS-lenT;i++){
                if(this.substr(i,lenT)===T){
                    res=i
                    break
                }
            }
            return res;
        }
        String.prototype.myIndexOf = myIndexOf;
    }();
    console.log(S.myIndexOf(T))
}
function test2(){
    ~ function(){
        /* 循环原始字符串的每一项，让每一项从当前位置向后截取T.length个字符，然后和T进行比较，如果不一样，继续循环；
            如果一样返回当前索引即可（循环结束）
        */
        function myIndexOf(T){
            //=>This:S
            let reg = new RegExp(T),
                res = reg.exec(this)
            return res===null? -1:res.index;
        }
        String.prototype.myIndexOf = myIndexOf;
    }();
    console.log(S.myIndexOf(T))
}

test1()
test2()