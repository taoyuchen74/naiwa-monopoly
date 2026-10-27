// Shared rule values. AI liquidity preferences are deliberately separate.
export const RULES=Object.freeze({startIncome:400,startTalentBonus:80,startCoupons:25,couponPickup:10,couponCap:150,loanLimit:1800,weekLength:7,bankClosedDay:3,stockClosedDay:0,depositInterest:.005,loanInterest:.04,propertySaleRatio:.65,chainRentCap:400});
export const MAX_BUILDING_LEVEL=5,ROUND_OPTIONS=Object.freeze([20,30,50,80]);
export const bankClosed=round=>round%RULES.weekLength===RULES.bankClosedDay;
export const stockClosed=round=>round%RULES.weekLength===RULES.stockClosedDay;
