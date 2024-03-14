(function (original) {
    console.enableLogging = function () {
        console.log = original;
    };
    console.disableLogging = function () {
        console.log = function () {};
    };
})(console.log);

module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);
  console.disableLogging();
};