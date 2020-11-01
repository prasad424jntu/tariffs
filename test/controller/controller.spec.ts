import * as chai from 'chai';
import chaiHttp = require("chai-http");
import app = require('../../server');

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe('Controller', () => {
    describe('GET Tariffs', () => {

        it('should get 2 tariffs and return status 200',  () => {
            chai.request(app)
                .get('/tariffs/list?annualconsumption=3500')
                .end((err, res) => {
                   res.should.have.status(200);
                   res.body[0].should.not.equal(undefined);
                   res.body[1].should.not.equal(undefined);
                   expect(res.body[2]).eq(undefined);
                });
        });

        it('Should fail when query parameter is not present', function () {
            chai.request(app)
                .get('/tariffs/list')
                .end((err, res) => {
                    res.should.have.status(500);
                });
        });

        it('Should fail when query parameter is wron', function () {
            chai.request(app)
                .get('/tariffs/list?consumption=5000')
                .end((err, res) => {
                    res.should.have.status(500);
                });
        });

    });
});



