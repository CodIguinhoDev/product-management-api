import express from "express";
import router from "./routes/products.js";
import { db_connection } from "./database/connection.js";
import { swaggerSpec } from "./config/swagger.js";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import "dotenv/config";

const server = express();

server.use(cors({ origin: process.env.URL_FRONT }));
server.use(express.json());
server.use("/api/v1", router);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const startServer = async () => {
  try {
    const connect = await db_connection.getConnection();
    connect.release();

    server.listen(process.env.PORT, () => {
      console.log("Servidor iniciado");
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco:", error.message);
  }
};

startServer();
