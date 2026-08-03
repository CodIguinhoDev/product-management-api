import swaggerJsdoc from "swagger-jsdoc";
import "dotenv/config";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Produtos",
      version: "1.0.0",
      description: "CRUD de produtos com Node.js, Express e MySQL",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api/v1`,
      },
    ],
  },
  apis: ["./src/routes/products.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
