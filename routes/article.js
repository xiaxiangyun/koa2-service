const router = require('koa-router')()
const ArtileController = require('../controllers/article')

/**
 * 文章接口
 */

// 创建文章
router.post('/create', ArtileController.create);

// 获取文章详情
router.get('/:id', ArtileController.detail)

module.exports = router