import * as express from 'express';
import * as tarriffRouter from './src/controller/controller';
import * as swaggerUi from 'swagger-ui-express';

const port = 3001;
const app = express();
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.use('/tariffs', tarriffRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Tariff Comparison Service is running on following port ${port}`);
})

export = app;