/* 代码实现图片懒加载
1.前端性能优化的重要方案
通过图片或数据的延迟加载，加快页面渲染的速度，让第一次打开页面的速度变快。
只有滑动到某个区域，我们才加载真实的图片，这样也可以节省加载的流量
2.处理方案，
把所有需要延迟加载的图片用一个盒子包起来，设置宽高和默认占位图。
开始让所有的Img的src为空，把真实图片的地址放到img的自定义属性上，让img隐藏
等待所有其他资源加载完成后，再开始加载图片
对于很多图片需要当页面滚动的时候当前图片区域完全显示出来后再加载真实图片
 */

// let $imgBox = $('.imgBox'),
//     $img = $imgBox.children('img'),
//     $window = $(window)

// $(document).ready(); //dom结构加载完
// // window.onload & window.onscroll
// $(window).on('load scroll', function () { //所有资源加载完成

//     if ($img.attr('isLoad') === 'true') return;
//     console.log('ok')
//     let $A = $imgBox.outerHeight() + $imgBox.offset().top;
//     let $B = $window.outerHeight() + $window.scrollTop()

//     if ($A <= $B) {
//         console.log($A, $B)
//         // 加载真实图片
//         $img.attr("src", $img.attr('data-img'))
//         $img.on('load', function () {
//             $img.css('display', 'block')
//             $img.stop().fadeIn()
//         })
//         $img.attr('isLoad', 'true') //存储自定义都是字符串
//     }
// })

let $container = $('.container'),
    $imgBoxs = null,
    $window = $(window)
let str = ``
new Array(20).fill(null).forEach(item => {
    str += `<div class="imgBox">
            <img src="" data-img="https://kacoro.com/upload/2020-07-12/07/37/45/859f2ef0-c3cf-11ea-9def-af6b01a723f7" />
        </div>`
});
$container.html(str);
$imgBoxs=$container.children('.imgBox')

//多张图片加载
$(window).on('load scroll', function () {
    let $B = $window.outerHeight() + $window.scrollTop();
    $imgBoxs.each((index,item)=>{
        let $item = $(item),
         $itemA = $item.outerHeight() + $item.offset().top,
         isLoad = $item.attr('isLoad')
        //  if ($item.attr('isLoad') === 'true') return;
         if ($itemA <= $B &&isLoad!=='') {
                    $item.attr('isLoad', 'true') //存储自定义都是字符串
                    // 加载真实图片
                    let $img = $item.children('img')
                    $img.attr("src", $img.attr('data-img'))
                    $img.on('load', ()=> {
                        // $img.css('display', 'block')
                        $img.fadeIn()
                    })
                   
        }
    })
})
