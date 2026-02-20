import 'dotenv/config';
import express from 'express';
import { sequelize } from './database';
import { adminJs, adminRouter } from './adminjs';

const app = express();

app.use(express.static('public'));
app.use(adminJs.options.rootPath, adminRouter);

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