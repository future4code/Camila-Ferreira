import { Request, Response } from "express";

export default async function createUser(
    req:Request,
    res:Response
    ) {
        try{

            if (
                !req.body.name ||
                !req.body.nickname ||
                !req.body.email 
            ){
                res.status(400).send('Preencha todos os campos')
            }

        }catch (error: any){
            res.status(400).send({
             message: error.message || error.sqlMessage
            })
        }
    }