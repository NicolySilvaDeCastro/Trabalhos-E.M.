const express = require('express'); // permite os comandos get, post, push e delete
const bodyParser = require('body-parser'); // json e xml

const app = express(); 
app.use(bodyParser.json());

let veiculos = [];

app.get('/veiculos', (req, res) => { //req = front-end e res = resposta
    res.json(veiculos); // restfull = get pega todos os itens(utilizar filtro) / graphic area = get seleciona
    });

    app.get('/veiculos/:placa', (req, res) => { //Filtro
        const { placa } = req.params; 
        const veiculo = veiculos.find(v => v.placa === placa); // se placa do veículo = array, significa que o veiculo foi encontrado
        if (veiculo) { 
        res.json(veiculo); 
        } else { 
        res.status(404).json({ message: 'Veículo não encontrado.' }); 
        } 
        });
        
        app.post('/veiculos', (req, res) => { 
            const { placa, marca, modelo, ano } = req.body; // quais atributos serão salvos
            const veiculo= { placa, marca, modelo, ano };
            veiculos.push(veiculo); 
            res.status(201).json({ message: 'Veículo cadastrado com sucesso.' }); 
            });
            
            app.put('/veiculos/:placa', (req, res) => { //put = colocar 
                const { placa } = req.params; // update --> atualiza informações
                const { marca, modelo, ano } = req.body; 
                const veiculo= veiculos.find(v => v.placa === placa); 
                if (veiculo) { 
                veiculo.marca = marca || veiculo.marca; 
                veiculo.modelo = modelo || veiculo.modelo; 
                veiculo.ano = ano || veiculo.ano; 
                res.json({ message: 'Informações do veículo atualizadas com sucesso.' });
                } else {
                res.status(404).json({ message: 'Veículo não encontrado.' }); 
                } 
                });

                app.delete('/veiculos/:placa', (req, res) => { // só é possível deletar pelo índice
                    const { placa } = req.params;  //quando o sistema deleta um atributo, ele apenas o ignora, porém ele continua ocupando memória do sistema
                    const veiculoIndex = veiculos.findIndex(v => v.placa === placa); 
                    if (veiculoIndex !== -1) { //3,1 = índice três e uma exclusão / 3,2 = índice três e duas exclusões a partr desse índice
                    veiculos.splice(veiculoIndex, 1); // o "1" sinaliza quantos irão excluír
                    res.json({ message: 'Veículo excluído com sucesso.' }); 
                    } else { 
                    res.status(404).json({ message: 'Veículo não encontrado.' }); 
                    } 
                    });


const port = 3000; // a porta 3000 é geralemnte usada para o node
app.listen(port, () => {  // executar servidor
console.log(`Servidor rodando em http://localhost:${port}`);  
});

//node index.js = executa código                   
                


/* COMANDOS DO TERMINAl:
npm init -y
npm install express
npm install body-parser

*/