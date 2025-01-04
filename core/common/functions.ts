import {useRouter, useSearchParams} from 'next/navigation';

type QueryParams = Record<string, string | number | undefined>;

export function useUpdateQueryParams() {
    const router = useRouter();
    const searchParams = useSearchParams();

    /**
     * Updates the URL with the provided query parameters.
     * @param params - An object containing key-value pairs of query parameters to add or update.
     * @param options - Optional configuration for URL updating.
     *                 `replace`: If true, replaces the current history state instead of pushing a new one.
     */
    function updateQueryParams(params: QueryParams, options: { replace?: boolean } = {}) {
        const currentParams = new URLSearchParams(searchParams);


        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                currentParams.delete(key);
            } else {
                currentParams.set(key, String(value));
            }
        });

        const newUrl = `${window.location.pathname}?${currentParams.toString()}`;

        if (options.replace) {
            router.replace(newUrl);
        } else {
            router.push(newUrl);
        }
    }

    function getQueryParams(key: string) {
        return searchParams.get(key)
    }

    return {updateQueryParams, getQueryParams, searchParams, router};
}
