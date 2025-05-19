import mongoose from "mongoose";
import { config } from "./config/config";
import app from "./app";
try {
  mongoose.connect(config.mongoUri).then(() => {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  });
} catch (error) {}
