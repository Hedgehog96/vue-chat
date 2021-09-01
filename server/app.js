/*
 * @Descripttion:
 * @Author: Lijia Lin
 * @Date: 2021-09-01 15:44:15
 * @LastEditTime: 2021-09-01 16:12:03
 */
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'hello world';
});

app.listen(3000, () => {
  console.log('[vue-chat-server] start-quick is starting at port 3000');
});
