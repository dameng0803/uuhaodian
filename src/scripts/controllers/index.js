const indexController = {
    navAction() {
        const pagelist = ['/index', '/girl']
            //console.log($('header'))
            //console.log($('main'))
        $('nav li').on('click', function() {
            //console.log(1);
            location.hash = pagelist[$(this).index()]
            $(this).addClass('active').siblings().removeClass('active')
        })
    },
    scrollAction() {
        console.log($('#scrollarea'))
        new IScroll('#scrollarea', {})
            //console.log(IScroll)
    },

    swiperAction() {
        console.log($("main .content"))
        let swiper = new Swiper('.swiper-container', {
            on: {
                slideChange: function() {
                    let index = swiper.activeIndex;

                }
            },
        })
        $('.banner').on('click', function() {
            console.log(1)
            swiper.slideTo($(this).index)
        })
    }


}

module.exports = indexController