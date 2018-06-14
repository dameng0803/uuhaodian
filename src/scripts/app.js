const indexTpl = require('./views/index.html')

const homeController = require('./controllers/home')
const indexController = require('./controllers/index.js')
const girlController = require('./controllers/girl.js')

const Router = require('./utils/router')



$('#root').html(indexTpl);
indexController.navAction();

const router = new Router();
router.route('/index', homeController.render);
router.route('/girl', girlController.render);
router.init();

setTimeout(() => {
    indexController.scrollAction()
})

indexController.swiperAction();