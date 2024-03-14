module.exports = async (page, scenario, vp) => {
  console.enableLogging();
  console.log(`Scenario ${scenario.sIndex+1} > ${scenario.label} (${vp.label})`);
  await require('./clickAndHoverHelper')(page, scenario);
  console.disableLogging();
  /* 
    Hardcoded to print Final Count of Passed/Failed  
    1.scenario.sIndex value for Comparison - 
    Number of Scenarios count is 1 for to calculate index we take Total count - 1 
    i.e. 1-1 = 0
    Hence, (scenario.sIndex == 0)
    2.vp.vIndex value for Comparison - 
    Number of View Port count is 2 for to calculate index we take Total count - 1 
    i.e. 2-1 = 1
    Hence, (vp.vIndex == 1)
  */
  if ((scenario.sIndex == 3) && (vp.vIndex == 1)) {
    console.enableLogging();
  }
};
