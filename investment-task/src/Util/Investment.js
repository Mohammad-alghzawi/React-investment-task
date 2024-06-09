// export function calculateInvestmentResults({
//   initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration,
// }) {
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const interestEarnedInYear = investmentValue;
//     investmentValue += interestEarnedInYear.annualData.push({
//       year: i + 1,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//     });
//   }
//   return annualData;
// }
export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      // Calculate the interest earned in the year based on the expected return rate
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      // Add the annual investment to the investment value
      investmentValue += interestEarnedInYear + annualInvestment;
  
      // Push the data for the year into the annualData array
      annualData.push({
        year: i + 1,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
      });
    }
    
    return annualData;
  }
  


  export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
