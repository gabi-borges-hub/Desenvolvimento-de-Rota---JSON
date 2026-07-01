//parte gabrielle borges

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('ola, meu nome e Gabi');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Resposta: ${JSON.stringify(req.body)}`);
});

app.post('/name', (req, res) => {
    let name = req.body.name;
    res.send('Ola,meu nome e ' + name);
});

//parte arthur giovanni

app.post(`/soma`, (req, res)=>{
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    console.log(`Num1: ${num1}\nNum2: ${num2}`);

    if (isNaN(num1) || isNaN (num2)){
        return res.status(400).send(`Por favor, envie dois números válidos.`);
    }

    const resultado = num1 + num2;
    res.send(`A soma de ${num1} + ${num2} é: ${resultado}`);_
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});




