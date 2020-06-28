import {Server} from "./server";
import {config} from "dotenv";

async function main(): Promise<void> {
    // Setup the environment variables
    config();
    // Create a server
    const server: Server = new Server();
    // Start the server
    server.start();
}

void main();
