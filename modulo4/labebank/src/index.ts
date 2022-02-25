import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { contas } from "./usuarios";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/usuarios/criarconta", (req: Request, res: Response) => {
   try {
      const { nome, CPF, dataNascimentoString } = req.body

      const [dia, mes, ano] = dataNascimentoString.split("/")
      const dataNascimento: Date = new Date(`${dia}-${mes}-${ano}`)

      contas.push({
         nome,
         CPF,
         dataNascimento,
         balanco: 0,
         declaracao: []
      })
      res.status(201).send("Conta criada!")

   } catch (error) {
      res.status(400).send(error.message)

   }
})

app.get("usuarios/todos"), (req: Request, res: Response) => {
   try{
      if(!contas.length){
         throw new Error("Conta não encontrada!")
      }
      res.status(200).send(contas)
   } catch(error) {
      res.status(400).send(error.message)

   }
}

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});