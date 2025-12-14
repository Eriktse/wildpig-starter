

export const POST = async (request: Request) => {
    const { name } = await request.json();
    const data = {
        "name": name || "Hello World",
        "age": 18123
    }
    return Response.json(data)
}