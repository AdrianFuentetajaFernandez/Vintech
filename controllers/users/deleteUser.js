const {getConnection} = require("../../db");

async function deleteUser(req,res,next){
    let connection;

    try{
        connection = await getConnection();

        try{

            //borramos user
            await connection.query(`
            DELETE
            FROM users
            WHERE id=?
            `,[req.auth.id]);
            
        }catch(error){
            throw new Error ("No se pudo borrar el usuario");
        }

        res.send("Usuario borrado correctamente");
        
    }catch(error){
        next(error);
    }finally{
        if(connection) connection.release();
    }
}

module.exports = {deleteUser};