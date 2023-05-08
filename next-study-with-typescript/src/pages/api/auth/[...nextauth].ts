import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const { GITHUB_CLIENT_KEY: CLIENT_KEY, GITHUB_SECRET_KEY: SECREY_KEY } =
  process.env;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: CLIENT_KEY,
      clientSecret: SECREY_KEY,
    }),
  ],
  secret: "sdaifhqwefhwaebfwafwaf",
};

export default NextAuth(authOptions);
