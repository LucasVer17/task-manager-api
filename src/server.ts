import 'dotenv/config';
import express from 'express';
import { sequelize } from './database';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
    console.log(`Server is running on port ${PORT}`);
});