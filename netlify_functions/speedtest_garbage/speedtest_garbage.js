import { randomBytes } from "node:crypto";

export default async (request) => {
    const url = new URL(request.url);

    let chunks = parseInt(url.searchParams.get("ckSize") || "4", 10);

    if (!chunks || chunks < 1) {
        chunks = 4;
    }

    if (chunks > 100) {
        chunks = 100;
    }

    // 1 MiB 隨機資料
    const data = randomBytes(1024 * 1024);

    // 重複 chunks 次
    const output = Buffer.concat(
        Array.from({ length: chunks }, () => data)
    );

    return new Response(output, {
        status: 200,
        headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment; filename=random.dat",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Pragma": "no-cache"
        }
    });
};