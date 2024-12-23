import { Alert } from "react-native";
import { Client, Account, ID } from "react-native-appwrite";

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "675b0068002ab3f02a73",
  platform: "com.davapp.aoraapp",
  databaseId: "675b154e00382943b665",
  userCollectionId: "675b15670001cda4585c",
  videoCollectionId: "675b16150024e01cacbc",
  storageId: "675c094a0032790b8d1a",
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const register = (username, email, password) => {
  return account.create(ID.unique(), email, password, username);
};

export const sign_in = async (email, password) => {
  try {
    const session = account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const log_out = async () => {
  await account.deleteSession("current");
};
