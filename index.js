const express = require('express');
const cors= require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) =>{
    res.send('WoW! I am  excited to learn node and express')
});

const users = [
    {id:0, name: 'sabana', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:1, name: 'suchona', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:2, name: 'upoma', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:3, name: 'Ayesha', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:4, name: 'Mafhuri', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:5, name: 'chumki', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:6, name: 'Rumki', email:'sabana@gmail.com', Phone:'0170000000'},
    {id:7, name: 'suha', email:'sabana@gmail.com', Phone:'0170000000'}
]

// query parameter
app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
});
// app.METHOD
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic API
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(['mangoes, banana, apple'])
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('Yummy Yummy marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});

