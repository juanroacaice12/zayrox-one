export async function getDashboardData() {

    const response = await fetch("/api/dashboard");

    if (!response.ok) {

        throw new Error("Error obteniendo dashboard");

    }

    return response.json();

}