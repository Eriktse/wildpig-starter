


export const getMeta = async () => {
    return Response.json({
        title: "我自定义的title信息，改一下试试",
        description: "我自定义的description信息，改一下试试",
        keywords: ["我自定义的keywords信息", "改一下试试"],
    });
}