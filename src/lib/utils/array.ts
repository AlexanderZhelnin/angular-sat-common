export function groupBy<T>(mas: T[], predicate: (p: T) => string): { [key: string]: T[] }
{
  return mas.reduce((r, a) =>
  {
    const group = predicate(a);

    r[group] = r[group] || [];
    r[group].push(a);
    return r;
  }, Object.create(null));
}
