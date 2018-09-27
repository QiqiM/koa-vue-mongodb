const router = require('koa-router')()
const controller = require('../controller')
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })
//
// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })
//
// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

router.get('/',async (ctx,next) => {
  ctx.body = "hello world! create by ytt! my blog => http://blog.yttlove.cn"
})
    .post("/api/user",controller.user.register)   //用户注册
    .post("/api/user/login",controller.user.login)  //用户登录
    .get('/api/user',controller.user.query) // 根据用户_id查询用户
    .get("/api/other/checkcode",controller.other.checkcode)  //验证码获取
    .post("/api/leave",controller.leave.addLeaver)        //添加留言
    .get("/api/leave",controller.leave.getLeaves)     //留言获取
    .delete("/api/leave/:id",controller.leave.deleteLeaver)  // 删除留言


module.exports = router
