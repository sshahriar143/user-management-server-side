const express = require('express');
const cors = require('cors');
const app =express();
const port =process.env.PORT || 5000 ;

// middleware
app.use(cors())
app.use(express.json())/* for get the data */

const users =[
    {id:1, name:'Sabana', email:'sabana@gmail.com'},
    {id:2, name:'Sabila', email:'sabila@gmail.com'},
    {id:3, name:'Sabnur', email:'sabnur@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send('Users Management Sever is Running')
});

app.post('/users', (req,res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser =req.body;
    newUser.id=users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})