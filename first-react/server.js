/**
 * Created by pomy on 15/11/5.
 */
var koa = require('koa');
var serve = require('koa-static');
var app = koa();
var path = require('path');
var cwd = __dirname;
var serveIndex = require('koa-serve-index');

app.use(serveIndex(cwd,{
    hidden:true,
    view:'details'
}));

var jsx = require('koa-jsx');
app.use(jsx(cwd,{
    reactTools:require('react-tools'),
    next:function(){
        return 1;
    }
}));

var modularize = require('koa-modularize');
var mount = require('koa-mount');
app.use(mount('/example',modularize(path.resolve(cwd,'example'))));
app.use(mount('/form',modularize(path.resolve(cwd,'form'))));
app.use(serve(cwd,{
    hidden:true
}));

app.listen(8000);
console.log('server start at '+ 8000);