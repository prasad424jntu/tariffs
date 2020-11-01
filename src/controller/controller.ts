import * as express from 'express';
import {getTariffProducts} from "../service/tariff-service";

const router = express.Router();

router.get('/list', (req, res) => {
    res.json(getTariffProducts(parseInt(req.query.annualconsumption.toString(), 0)));
});

export = router;