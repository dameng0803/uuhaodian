const model = require('../models/home')

const homeTpl = require('../views/home.html')

const postlistTpl = require('../views/postlist.html')

const homeController = {
    async render() {
        let result = await model.find();
        let data = result.data[2];
        let html = template.render(postlistTpl, data);
        $('.container main').html(homeTpl)
        $('#postlist').html(html)
            //console.log(html)
            // return html;
    }
}

module.exports = homeController;