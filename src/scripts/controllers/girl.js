const model = require('../models/home')

const girlTpl = require('../views/girl.html')

const girllistTpl = require('../views/girllist.html')

const girllistTpl2 = require('../views/girllist2.html')

const girlController = {
    async render() {
        let result = await model.find()
        let data = result.data[0];
        let girl1 = template.render(girllistTpl, data);
        let girl2 = template.render(girllistTpl2, data);

        $('.container main').html(girlTpl);
        $('#classify-good').html(girl1);
        $('#girllist').html(girl2);
        // return girl1, girl2;
    }
}

module.exports = girlController