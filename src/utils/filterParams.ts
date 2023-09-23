const filterParams = <Params extends object>(params: Params) =>
  Object.keys(params).reduce((acc: any, key: string) => {
    const transformedKey = `filter[${key}]`;
    acc[transformedKey] = params[key as keyof Params];
    return acc;
  }, {});
export { filterParams };
