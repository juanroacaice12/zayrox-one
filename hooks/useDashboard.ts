"use client";

import { useEffect, useState } from "react";
import { getDashboardData } from "@/services/dashboard.service";

export function useDashboard() {

    const [data, setData] = useState<any>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getDashboardData()

            .then(setData)

            .finally(() => setLoading(false));

    }, []);

    return {

        data,

        loading,

    };

}