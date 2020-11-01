import * as chai from 'chai';
import {
    getTariffProducts,
    getBaseElectricityTariffPerAnnum,
    getPackagedTariffPerAnum
} from '../../src/service/tariff-service';

const expect = chai.expect;

describe('TariffService', () =>  {

    describe('getTariffProducts', () =>  {

        it('should get two tariff products', () =>  {
            let tariffProducts = getTariffProducts(3500);
            expect(tariffProducts.length).eq(2);
        });

        it('should get tariff products in sorted order', () =>  {
            let tariffProducts = getTariffProducts(3500);
            expect(tariffProducts[0].annualCosts <= tariffProducts[1].annualCosts).eq(true);
        });

        it('should consider partial kwhs also', () =>  {
            let tariffProducts = getTariffProducts(3500.35);
            expect(tariffProducts[0].annualCosts).eq(800);
        });

    });

    describe('getBaseElectricityTariffPerAnnum', () =>  {

        let baseTariffTestDataList = [{cosumption: 3500, expectedCost: 830},
            {cosumption: 4500, expectedCost: 1050},
            {cosumption: 6000, expectedCost: 1380}];

        baseTariffTestDataList.forEach(td => {
            it(`should get  consumption cost ${td.expectedCost} for ${td.cosumption} kWh/year used`, () =>  {
                let baseElectricityTariffPerAnnum = getBaseElectricityTariffPerAnnum(td.cosumption);
                expect(baseElectricityTariffPerAnnum.annualCosts).eq(td.expectedCost);
            });
        });

        it('should return right tariff Name', () =>  {
            let baseElectricityTariffPerAnnum = getBaseElectricityTariffPerAnnum(3500);
            expect(baseElectricityTariffPerAnnum.tariffName).eq('Basic electricity tariff');
        });
    });

    describe('getPackagedTariffPerAnum', () =>  {

        let baseTariffTestDataList = [{cosumption: 3500, expectedCost: 800},
            {cosumption: 4500, expectedCost: 950},
            {cosumption: 6000, expectedCost: 1400}];

        baseTariffTestDataList.forEach(td => {
            it(`should get  consumption cost ${td.expectedCost} for ${td.cosumption} kWh/year used`, () =>  {
                let baseElectricityTariffPerAnnum = getPackagedTariffPerAnum(td.cosumption);
                expect(baseElectricityTariffPerAnnum.annualCosts).eq(td.expectedCost);
            });
        })
    });

    it('should return right tariff Name', () =>  {
        let baseElectricityTariffPerAnnum = getPackagedTariffPerAnum(3500);
        expect(baseElectricityTariffPerAnnum.tariffName).eq('Packaged tariff');
    });

});