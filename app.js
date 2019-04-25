let express = require('express')
let todoController = require('./controllers/todoController')
let bodyParser = require('body-parser')
// 实例化 express
let app = express()
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({
  extended: false
})
// 设置模板引擎
app.set('view engine', 'ejs')
// 添加静态文件
app.use(express.static('./public'))
todoController(app, urlencodedParser, jsonParser)
app.listen(3000)
console.log('listening is prot 3000');