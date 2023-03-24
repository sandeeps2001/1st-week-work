const express = require('express')
const app = express()
app.use(express.json())
const loyalytics = [{
    id: 1,
    name: 'nikon',
    vehicle:'car'
},
{
    id: 2,
    name: 'aaron',
    vehicle:'car'
},
{
    id: 3,
    name: 'rajeev',
    vehicle:'car'

}
]



app.get('/api/loyalytics', (req, res) => {
    res.send(loyalytics)
})

//post

app.post('/api/loyalytics', (req, res) => {
    const member = {
        id: loyalytics.length + 1,
        name: req.body.name,
        vehicle:req.body.vehicle
    }
    loyalytics.push(member);
    res.send(member);
});

app.put('/api/loyalytics/:id', (req, res) => {
    const loy = loyalytics.find(l => l.id === parseInt(req.params.id))
    if (!loy){
return res.status(404).send('the given id not found.')
    }
    loy.name = req.body.name
    res.send(loy)
})

app.patch('/api/loyalytics/patch/:id', (req, res) => {
    const loy1 = loyalytics.find(l => l.id === parseInt(req.params.id))
    if (!loy1){
return res.status(404).send('the given id not found.')
    }
    loy1.vehicle = req.body.vehicle
    res.send(loy1)
})

app.delete('/api/loyalytics/:id', (req, res) => {
    const loy= loyalytics.find(g => g.id === parseInt(req.params.id))
    if (!loy) return res.status(404).send('given ID was not found.')

    const index = loyalytics.indexOf(loy)
    loyalytics.splice(index, 1)

    res.send(loy)
});


app.listen(3000, ()=>{
    console.log("server started")
})