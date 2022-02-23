const { urlencoded } = require("express")
const express = require("express")
const app = express()

app.set("view engie","pug")
app.set("views", "views")
app.use(express.urlencoded({extended : true}));

app.get('/', (req,res) => {
    res.render("form.pug");
});

app.post("/",(req,res) => {
    const texto = req.body.title || '';
    res.send('<h1>Hola '+texto+ ' </h1>')
})

app.listen(3000, () => console.log('Listening on port 3000!'));