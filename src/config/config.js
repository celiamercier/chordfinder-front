const dynamicConfig = require('./' + process.env.REACT_APP_CONFIG_FILE);
/* redefine config object in order to benefit from the autocompletion */
const config = {
    "SERVER_URL": dynamicConfig.SERVER_URL
};
export default config;