module.exports = async (page, scenario, vp) => {
  console.enableLogging();
  console.log(`Scenario ${scenario.sIndex+1} > ${scenario.label} (${vp.label})`);
  await require('./backstop_data/engine_scripts/puppet/clickAndHoverHelper')(page, scenario);
  console.disableLogging();
  /* 
    Follow instructions below to print Final Count of Passed/Failed:
    
    1. scenario.sIndex value for Comparison - 
    Number of Scenarios count is 4 for to calculate index we take Total count of scenarios 
    array section from backstop.json and subtract 1 from it 
    i.e. In our case its 4-1 = 3
    Hence, (scenario.sIndex == 3)
    
    2. vp.vIndex value for Comparison - 
    Number of View Port count is 2 for to calculate index we take Total count of viewports 
    array section from backstop.json and subtract 1 from it 
    i.e. In our case its 2-1 = 1
    Hence, (vp.vIndex == 1)

    Note:
  */
  if ((scenario.sIndex == 3) && (vp.vIndex == 1)) {
    console.enableLogging();
  }
};
