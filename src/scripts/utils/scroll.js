// const model = require('../models/home.js')
// const postlist = require('../views/postlist.html')

// module.exports = function(){
//     let page = 1;
//     let homescroll = new IScroll('#scrollarea',{
//         probeType:3,
//         mouseWheel:true
//     })
//     homescroll.IScrollBy(0,-40);
//     let foot = $('.foot img'),
//         bottomImgHasClass = foot.hasClass('down')

//     homescroll.on('scroll',function(){
//         let y = this.y,
//         maxY = this.maxScrollY - y;

//         if ( maxY >=0 ) {
//             !bottomImgHasClass && foot.addClass('down')
//             return
//           }
//     })

//     homescroll.on('scrollEnd',async function(){
//         let maxY = this.maxScrollY - this.y
//         if (maxY > -40 && maxY < 0) {
//             this.scrollTo(0, this.maxScrollY + 40);
//             foot.removeClass('down')
//         } else if (maxY >= 0) {
//             foot.attr('src', '/images/ajax-loader.gif');

//             let result = await model.find(`/lagou/listmore.json?pageNo=${++pageNo}&pageSize=15`)
//             let data = result.content.data.page
//             let html = template.render(poslistTpl, data)
//             $('#poslist').append(html)

//             this.refresh()

//             this.scrollTo(0, this.y + 40);
//             foot.removeClass('down');
//             foot.attr('src', '/images/arrow.png');
//         }
//     })
// }