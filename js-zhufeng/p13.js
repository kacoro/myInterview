// 编写一个程序,将数组扁平化,并去除其中重复度部分数据,最终得到一个升序且不重复的数组




function test1(){ //Array.flat
  let arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]
  arr.flat(Infinity)
  arr = Array.from(new Set(arr)).sort((a,b)=>a-b)
}
function test2(){ //Array.flat
  let arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]
  arr.toString().split(',').map(item=>{
    return Number(item)
  })
  arr = Array.from(new Set(arr)).sort((a,b)=>a-b)
}

test1()

