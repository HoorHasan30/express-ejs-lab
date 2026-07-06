// imports 
const express = require("express") //importing express package
const app = express() // creates a express application
const resturaunts = require('./data')

app.use(express.static('public')) // serves all static files from public folder


// Routes
app.get('/',
    (req, res) => {
        res.render("homepage.ejs")
    }
)

app.get('/resturaunts',
    (req, res) => {
        res.render("all-resturaunts.ejs",
            {resturaunts}
        )
    }
)

app.get('/resturaunts/:id',
    (req, res) => {
            
        const foundRes = resturaunts.find(
            (oneRes) => {return oneRes.id === Number(req.params.id)}
        )
        console.log(foundRes)

        res.render("resturaunts-details.ejs",
            {resturaunt : foundRes}
        )
    }
)


app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000
