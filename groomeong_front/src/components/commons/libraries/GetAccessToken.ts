// import { gql, GraphQLClient } from "graphql-request";
// import { IMutation } from "../../../commons/types/generated/types";
// // import { useRouter } from "next/router";

// const RESTORE_ACCESS_TOKEN = gql`
//   mutation {
//     restoreAccessToken
//   }
// `;

// export const GetAccessToken = async (): Promise<string | undefined> => {
//   // const router = useRouter();

//   try {
//     const graphQLClient = new GraphQLClient(
//       "http://34.64.53.80:3000/graphql",
//       { credentials: "include" }
//     );
//     const result = await graphQLClient.request<
//       Pick<IMutation, "restoreAccessToken">
//     >(RESTORE_ACCESS_TOKEN);
//     const newAccessToken = result.restoreAccessToken;
//     console.log(newAccessToken);
//     return newAccessToken;
//   } catch (error) {
//     if (error instanceof Error) console.log(error.message);
//   }
// };
