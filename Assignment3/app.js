const fs = require('fs');

const server = require('http')

let Name = "Rohit kewat"
fs.writeFile('index.html', `
<h1> Hello World </h1>
<p> This is ${Name}... </p>
` , (err) => {
    if (err) {
        
        console.log(err);

    }
})

const server1 = server.createServer((req,res)=>{
     
    // res.write('./index.html');
    
   const file = fs.readFileSync('index.html') 
   res.end(file);

})
server1.listen(3000,()=> console.log("Server in on ")) ;