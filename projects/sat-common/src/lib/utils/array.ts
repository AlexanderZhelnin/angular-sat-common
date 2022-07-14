
/**
 * Функция группировки по значению
 *
 * ```ts
 * groupBy([
 *   { id: 1, name: 'test1' },
 *   { id: 2, name: 'test1' },
 *   { id: 3, name: 'test2' },
 * ], p => p.name);
 * // => { test1: [{ id: 1, name: 'test1' }, { id: 2, name: 'test1' }], test2: { id: 3, name: 'test2' } }
 * ```
 *
 * @template T
 * @param mas входной массив значений для группировки
 * @param predicate функция получение ключа группировки
 * @return {*} сгруппированный массив значений
 */
export function groupBy<T>(mas: T[], predicate: (p: T) => string): { [key: string]: T[] }
{
  return mas.reduce<{ [key: string]: T[] }>((r, a) =>
  {
    const group = predicate(a);
    r[group] ??= [];
    r[group].push(a);
    return r;
  }, {});
}
