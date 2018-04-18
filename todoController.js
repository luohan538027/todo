var data = [{item:'get milk'},{item:'kick code'},{item:'play pc'}]
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app) {
app.get('/todo',function(req,res){
 res.render('todo',{todo:data});
})


app.post('/todo', urlencodedParser,function(req,res){
    console.log(req.params)
    data.push(req.body);
    res.json(data)
})


app.delete('/todo/:item',function(req,res){
    console.log(req.params.item)
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, "-") !== req.params.item
    })

    res.json(data);
})

}