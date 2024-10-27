// graphql/ts-resolvers/getAllProducts.ts
function request(ctx) {
  return {
    version: "1.0",
    method: "GET",
    params: {
      headers: {
        "Content-Type": "application/json"
      }
    },
    resourcePath: `/products`
  };
}
function response(ctx) {
  const data = JSON.parse(ctx.result.body);
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    price: item.price,
    image: item.image
  }));
}
export {
  request,
  response
};
