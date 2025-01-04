export const config = Object.freeze({
    PUBLIC_BASEURL: process.env.NEXT_PUBLIC_BASE_URL as string,
    FILE_SERVER: process.env.NEXT_FILE_SERVER_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    PUBLIC_USERID_SECRET: process.env.NEXT_PUBLIC_URL_USERID_SECRET,
});
