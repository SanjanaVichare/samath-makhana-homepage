import { useEffect, useState } from "react";
import { getCustomer } from "./customer";

export function useCustomer() {
    const [customer, setCustomer] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        async function loadCustomer() {
            try {
                const result =
                    await getCustomer();

                setCustomer(result);
            } catch (error) {
                console.error(
                    "Failed to load customer:",
                    error
                );

                setCustomer(null);
            } finally {
                setLoading(false);
            }
        }

        loadCustomer();
    }, []);

    return {
        customer,
        loading,
        isLoggedIn: !!customer,
    };
}