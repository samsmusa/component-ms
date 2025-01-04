import {User} from "@/core/common/Interfaces";
import {apiGet} from "@/core/common/api";

export async function fetchUser(): Promise<User | null> {
    try {
        const data = await apiGet<User>('auth/api/profile/')
        return data?.data
    } catch (e) {
        console.log("eerr", e)
        return null
    }

}
