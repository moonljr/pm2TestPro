let mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://139.196.90.36/todos', {
  useNewUrlParser: true
});
// 定义数据库字段类型
let todoSchema = new mongoose.Schema({
  item: String
})
let todo = mongoose.model('todo', todoSchema)
module.exports = function (app, urlencodedParser, jsonParser) {
  app.get('/todoList', function (req, res) {
    todo.find({}, (err, data)=> {
      if(err) throw err;
      res.send({
        status: 1,
        data,
        errMsg: 'getTodoList'
      })
    })
  })
    app.post('/todoList', function (req, res) {
      todo.find({}, (err, data) => {
        if (err) throw err;
        res.send({
          status: 1,
          data,
          errMsg: 'getTodoList'
        })
      })
    })
  app.get('/todo', function (req, res) {
    todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', {
        todos: data
      })
    })
  })
  app.post('/todo', urlencodedParser, function (req, res) {
    todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json({
        status: 1
      });
    })
  })
  app.delete('/todo/:delete', function (req, res) {
    let str = req.params.delete.replace(/-/ig, ' ')
    console.log('str', str);
    todo.deleteOne({
      item: str
    }, (err, data) => {
      if (err) throw err;
      res.send({
        status: 1
      })
    })
  })
}