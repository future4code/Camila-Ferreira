import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net';
import connection from './connection'

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const adress = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${adress.port}`);
    } else {
        console.error('Failure upon starting server.');
    }
})

// Exercicio 1:
// a) Quando usamos raw ele devolve o resultado da query junto com
// outras informações, geralmente o que queremos acessar vem na primeira posição [0]

// b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)
    return result[0][0]
} 

// c)
const getGender = async (gender: string): Promise<any> => {
const result = await connection.raw(`
SELECT COUNT(*) FROM Actor WHERE gender = '{$gender}'
`)
return result[0][0]
} 

// EXERCICIO 2

// a)
const updateSalary = async (
    salary: number, 
    id: string
    ): Promise<any> => {
    await connection("Actor")
    .update({
      salary: salary  
    })
    .where("id", id)
};

// b)
const deleteActor = async (
    id: string
): Promise<any> => {
    await connection("Actor")
    .delete()
    .where("id", id)
};

// c) 
const averageSalaryByGender = async (
    gender: string,
    salary: number
): Promise<any> => {
    await connection("Actor")
    .avg(salary)
    .where(`${gender}`)
}

// EXERCICIO 3

// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id;
//         const actor = console.log await getActorById(id);
//         res.status(200).send(actor)
//     } catch (err) {
//         res.status(400).send({
//             message: err.message
//         });
//     }
// })