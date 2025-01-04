import { config } from "@/core/common/appConfig";

export interface IQueryParams {
    limit?: number;
    offset?: number;
    [key: string]: string | number | undefined;
}

const addQueryParams =
    (route: string) =>
    (queryParams: IQueryParams = { limit: 10, offset: 0 }) => {
        let modifiedUrl = route;
        if (route.slice(-1) === "/") {
            modifiedUrl = route.slice(0, -1);
        }
        const queryString = `/?${Object.entries(queryParams)
            .map(([key, value]) => `&${key}=${value}`)
            .join("")}`;
        return `${modifiedUrl}${queryString}`;
    };

export function getFullUrl(path: string) {
    return config.PUBLIC_BASEURL.concat("/", path);
}

export const apiRoute = Object.freeze({
    AUTH: {
        USER_PROFILE: "/auth/api/profile/",
        LOGIN: "/auth/api/signin/",
        SIGN_UP: "/auth/api/signup/",
        OTP_CREATE: "/auth/api/otp-create/",
        OTP_VERIFICATION: "/auth/api/otp-verification/",
        REFRESH_TOKEN: "/auth/api/token/refresh/",
        BLACK_LIST: "/auth/api/token/blacklist-custom/",
        RESET_PASSWORD: "/auth/api/reset-password/",
        RESET_PASSWORD_OTP_VERIFY: "/auth/api/password-reset/otp-verify/",
        RESET_PASSWORD_OTP_RESEND: "/auth/api/password-reset/otp-resend/",
        UPDATE_PASSWORD: (phone: string) =>
            `/auth/api/reset-password/${phone}/`,
    },
    FILES: {
        IMAGES: `files/images/`,
    },
    PUBLIC: {
        CARDS: "api/cards/",
        getComment: "",
        postComment: "",
        PRODUCTS: addQueryParams("ecommerce/api/v1/public/products/"),
    },
    PRIVATE: {
        CART: {
            LIST_CART: addQueryParams("ecommerce/api/v1/private/cart"),
            DELETE_CART: (id: string | number) =>
                `ecommerce/api/v1/private/cart/${id}/`,
            CHANGE_CART: (id: string | number) =>
                `ecommerce/api/v1/private/cart/${id}/`,
        },
    },
    protected: {},
});
