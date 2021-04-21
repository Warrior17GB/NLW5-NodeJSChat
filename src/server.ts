import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

/** Rotas que vamos utilizar
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
*/

app.use(routes);

app.listen(8080, () => console.log("Server is running on port 8080"));