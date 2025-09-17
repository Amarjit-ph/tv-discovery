export async function fetchFromTMDB(endpoint: string, query: Record<string, string> = {}) {
    const params = new URLSearchParams({
        api_key: process.env.TMDB_API_KEY ?? "",
        language: "en-US",
        ...query,
    });

    const res = await fetch(`${process.env.TMDB_BASE_URL}${endpoint}?${params}`, {
        next: { revalidate: 3600 }, // ISR cache: 1 hr
    });

    if (!res.ok) {
        throw new Error(`TMDB error: ${res.status}`);
    }

    return res.json();
}
