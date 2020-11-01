import {Tariff} from "../models/Tariff";
import {
    BASIC_ELECTRICITY_TARIFF_MONTHLY_BASE_COST,
    BASIC_ELECTRICITY_TARIFF_MONTHLY_CONSUMPTION_COST_PER_KWH,
    BASIC_ELECTRICITY_TARIFF_NAME,
    PACKAGED_TARIFF_BASE_KWH,
    PACKAGED_TARIFF_BASE_TARIFF,
    PACKAGED_TARIFF_COST_PER_KWH_ABOVE_BASE_KWH,
    PACKAGED_TARIFF_NAME
} from "../common/tariff-constants";

export function getTariffProducts(annualConsumptionInKwh: number): Tariff[] {
    let baseElectricityTariffPerAnnum = getBaseElectricityTariffPerAnnum(annualConsumptionInKwh);
    let packagedTariffPerAnum = getPackagedTariffPerAnum(annualConsumptionInKwh);
    let tariffs = [baseElectricityTariffPerAnnum, packagedTariffPerAnum].sort(
        (a, b) => a.annualCosts - b.annualCosts
    );
    return tariffs;
}

export function getBaseElectricityTariffPerAnnum(annualConsumptionInKwh: number): Tariff {
    const annualCosts = ((BASIC_ELECTRICITY_TARIFF_MONTHLY_BASE_COST * 12) +
        (BASIC_ELECTRICITY_TARIFF_MONTHLY_CONSUMPTION_COST_PER_KWH * annualConsumptionInKwh));
    return {
        annualCosts: annualCosts,
        tariffName: BASIC_ELECTRICITY_TARIFF_NAME
    }
}

export function getPackagedTariffPerAnum(annualConsumptionInKwh: number): Tariff {
    let annualCosts: number;
    if (annualConsumptionInKwh <= PACKAGED_TARIFF_BASE_KWH) {
        annualCosts = PACKAGED_TARIFF_BASE_TARIFF;
    } else {

        annualCosts = PACKAGED_TARIFF_BASE_TARIFF +
            ((annualConsumptionInKwh - PACKAGED_TARIFF_BASE_KWH) * PACKAGED_TARIFF_COST_PER_KWH_ABOVE_BASE_KWH);
    }
    return {
        annualCosts: annualCosts,
        tariffName: PACKAGED_TARIFF_NAME
    };
}
