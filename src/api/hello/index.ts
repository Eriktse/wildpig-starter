

export const POST = async (request: Request) => {
    const data = {
        "name": "Hello World",
        "age": 18123
    }
    return Response.json(data)
}