
/**
 * Функция глубокого копирования
 *
 * ```ts
   deepClone({
    repository: {
      type: 'git',
      url: 'https://github.com/AlexanderZhelnin/angular-sat-common'
    },
    author: {
      name: 'Александр Желнин',
      url: 'https://www.youtube.com/channel/UCGntVzOD7faGCYbrUfd8PQg'
    }
  })
 ```
 * @template T
 * @param v Входное значение для клонирования
 * @return {*} "глубокая" копия
 */
export function deepClone<T>(v: T): T
{
  if (Array.isArray(v))
    return [...(v as any[]).map(m => deepClone(m))] as any;
  else if (typeof v === 'object')
  {
    const clObj: { [key: string]: any } = {};
    for (const key in v)
      clObj[key] = deepClone(v[key]);

    return clObj as T;
  }
  else return v;

}
