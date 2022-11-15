import express from "express"

const app =  express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello!!!')
})

app.post('/login', (req, res)=>{
    console.log(req);
    res.send(req.body)
})

app.listen(4000)
