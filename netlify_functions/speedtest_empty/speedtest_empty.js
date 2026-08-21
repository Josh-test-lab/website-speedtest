export default async () => {
    return new Response(null, {
        status: 200,
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Pragma": "no-cache"
        }
    });
};