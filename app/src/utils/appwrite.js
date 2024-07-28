import { Client, Account, ID } from "appwrite";
import { APPWRITE_URL, PROJECT_ID } from "./constants";

const client = new Client()
    .setEndpoint(APPWRITE_URL) // Your API Endpoint
    .setProject(PROJECT_ID); // Your project ID

const account = new Account(client);

export { account };