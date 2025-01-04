export const frontendRoute = Object.freeze({
    PRIVATE: {
        PROFILE: "/profile",
        ORDERS: "/orders",
    },
    PROTECTED: {
        DASHBOARD: "/dashboard",
        ORDERS: "/dashboard/order",
        USERS: "/dashboard/users",
    },
    PUBLIC: {
        Home: "/",
        Home_BN: "/bn",
        Home_EN: "/en",
        LOGIN: "/login",
        SIGNUP: "/signup",
        OTP: "/otp",
        RESET_PASSWORD: "/reset-password",
        UPDATE_PASSWORD: "/update-password",
        SingleProduct: "/products",
    },
});
