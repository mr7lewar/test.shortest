import { shortest } from "@antiwork/shortest";

shortest("Login to the app using email and password", {
  username: process.env.GITHUB_USERNAME,
  password: process.env.GITHUB_PASSWORD,
});