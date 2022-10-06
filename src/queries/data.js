const getSingleComp = function(id){ 
    const query = 
    `SELECT * FROM data WHERE id=${id}`
    return query
}

const postComp = function(name, area) {
    const query = `INSERT INTO  data (name, area) 
            VALUES
                ( '${name}', '${area}');
    `
    return query
}




module.exports = {
    getAllCompanies: `
        SELECT * 
        FROM 
            data;
    `,
    getSingleComp,
    postComp
}