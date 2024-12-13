import { Client, Account, ID } from "react-native-appwrite";

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "675b0068002ab3f02a73",
  platform: "com.davapp.aoraapp",
  databaseId : "675b154e00382943b665",
  userCollectionId : "675b15670001cda4585c",
  videoCollectionId : "675b16150024e01cacbc"
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);
