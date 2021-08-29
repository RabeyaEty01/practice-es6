
// 11, 12
const company = {
    name: 'GP',
    ceo: { cid: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }

};

//const { name, cid, food } = company.ceo;
//const { work, employee, framework, tech } = company.web;

//console.log(name, food, work, employee, framework, first, third);
//console.log(company?.backend?.tech.third);
console.log(company.web.tech?.back?.third);