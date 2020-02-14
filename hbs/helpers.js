const hbs = require('hbs')

hbs.registerHelper('getDate', () => {
    return new Date().getFullYear();

})