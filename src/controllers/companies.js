const db = require('../config/config.js')
const query = require('../queries/data.js')

const fetchAllComp = async (req, res) => {
    try {
        const companies = await db.any(query.getAllCompanies)
        return res.status(200).json({
            status: 'Success',
            message: 'Successfully fetched companies',
            data: companies
        })
    } catch (err) {
            console.log(err)
            return err;
    }
}

const fetchSingleComp = async (req, res) => {
    try {
        let result = await db.one(`SELECT * FROM data WHERE id=${req.params.id}`)
        console.log(result)
            return res.status(200).json({
            status: 'Success',
            message: 'Successfully fetched single company',
            data: result
        })
    } catch (error) {
        console.log(err)
        return err;
    }
}


const postCompany = async (req, res) => {
    try {
        const company = req.body;
        let result = await db.none( `INSERT INTO data(name,area) VALUES('${company.name}', '${company.area}')`)
    
            return res.status(201).json({
            status: 'Success',
            message: 'Company sent Successfully',
            data: company
        })
    } catch (error) {
        console.log(error)
        return error;
    }
}

const updateCompany = async (req, res) => {
    try {
        const company = req.body;
        const id = parseInt(req.params.id)
        let result = await db.none( `UPDATE data SET name = '${company.name}'
                        '${company.area}' WHERE id = ${id}
                        `)
        
            return res.status(200).json({
            status: 'Success',
            message: 'Company updated Successfully',
            data: company
        })
    } catch (error) {
        console.log(error)
        return error;
    }
}

const deleteCompany = async (req, res)=>{
    let deleteQuery = `DELETE FROM data WHERE id=${req.params.id}`
    let result = await db.any(deleteQuery)
    return res.status(200).json({
        status: 'Success',
        message: 'Company deleted Successfully',
    })

}
module.exports = {fetchAllComp, fetchSingleComp, postCompany, updateCompany, deleteCompany }