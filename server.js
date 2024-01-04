// second task
http=require('http')
const Server=http.createServer((req,res)=>{
    res.write('<h1>hello Node!!!</h1>');
    res.end();

}).listen(3000,()=>{
    console.log('it s OK')
})