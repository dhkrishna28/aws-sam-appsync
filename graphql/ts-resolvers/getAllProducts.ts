interface RequestParams {
  headers: {
    'Content-Type': string;
  };
}

interface Request {
  version: string;
  method: string;
  params: RequestParams;
  resourcePath: string;
}

interface ResponseItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

export function request(ctx: any): Request {
  return {
    version: '1.0',
    method: 'GET',
    params: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    resourcePath: `/products`,
  };
}

export function response(ctx: any): ResponseItem[] {
  const data = JSON.parse(ctx.result.body);
  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    price: item.price,
    image: item.image,
  }));
}
