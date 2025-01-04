import { messages } from "@/core/common/messages";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

interface BackendValidationErrorResponse {
    [key: string]: string[];
}

interface IFactory {
    // eslint-disable-next-line no-unused-vars
    [key: number]: (data: BackendValidationErrorResponse) => void;
}

export function axiosErrorHandler(
    error: AxiosError | Error | undefined,
    factory?: IFactory,
) {
    if (axios.isAxiosError(error)) {
        if (error.code === "ERR_NETWORK") {
            toast.error(messages.CONNECTION_ERROR.title, {
                description: messages.CONNECTION_ERROR.details,
                position: "top-center",
            });
            return;
        }
        if (error.code === "ERR_BAD_REQUEST") {
            const response = error.response || { data: {}, status: null };
            const { data, status } = response;
            if (factory) {
                for (const [code, func] of Object.entries(factory || {})) {
                    if (status === Number(code)) {
                        func(data);
                    }
                }
            } else if (status === 400) {
                for (const [key, value] of Object.entries(
                    data as BackendValidationErrorResponse,
                )) {
                    toast.error(key, {
                        description: value?.[0] ?? "",
                        position: "top-center",
                    });
                }
            } else {
                toast.error(error.code, { position: "top-center" });
            }
        }
    }
    return error;
}
