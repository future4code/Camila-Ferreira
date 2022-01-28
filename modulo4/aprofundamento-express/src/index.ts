import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// Exercicio 1

app.get("/ping", (req: Request, res: Response) => {
    console.log(res.send("Pong!"))

})

// Exercicio 2

type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercicio 3

const toDoTasks: Task[] = [
    {
    userId: 1,
    id: 1,
    title: "Limpar areia dos gatos",
    completed: true
    },

    {
    userId: 1,
    id: 1,
    title: "Fazer todos os exercicios restantes",
    completed: false
    },
    {
    userId: 2,
    id: 2,
    title: "Acordar no horário certo",
    completed: true
    }
]

// Exercicio 4

// app.get('/todo/completed', (req: Request, res: Response) => {
//     const tasksCompleted = req.params.completed
    
//    const completedTasks = []
//    if (req.params.completed === true) {
//        tasksCompleted = true
//    } else {
//        if (req.params.completed === false)
//        tasksCompleted = false
//    }



    

// })
