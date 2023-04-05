export const filterByProperty = (arr: any[], property: string, value: any) => {
  return arr.filter((item: any) => item[property] === value);
};

export const filterOutByProperty = (
  arr: any[],
  property: string,
  value: any
) => {
  return arr.filter((item: any) => item[property] !== value);
};
