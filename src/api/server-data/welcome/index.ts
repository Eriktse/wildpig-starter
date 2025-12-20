

export const GET = (req: Request) => {
    const title = new URLSearchParams(req.url.split("?")[1]).get("title") || "welcome";
    return Response.json({
        title,
    })
}