const client = require('./database');

const dataMapper = {
    getAllFigurines: async () => {
       return (await client.query(`SELECT * FROM "figurine"`)).rows;
    },
    getOneFigurine: async (id) => {
       return (await client.query(`SELECT * FROM "figurine" WHERE id = ${Number(id)}`)).rows[0];
    }
}
module.exports = dataMapper;




