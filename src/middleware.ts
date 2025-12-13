


export const middleware = async (req: Request, next: () => Promise<Response>) => {
    return await next();
}