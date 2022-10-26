const fiftyThirtyTwenty = (incomes) => {
    // const needs = incomes * 0.5;
    // const wants = incomes * 0.3;
    // const savings = incomes * 0.2;
    const [needs, wants, savings] = [incomes * 0.5, incomes * 0.3, incomes * 0.2];

    return {
        needs: needs,
        wants: wants,
        savings: savings
    }

}

console.log(fiftyThirtyTwenty(1000))
console.log(fiftyThirtyTwenty(50000))
console.log(fiftyThirtyTwenty(13450))