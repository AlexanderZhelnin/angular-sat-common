import { Injectable } from '@angular/core';

export function checkMatch(txt: string, m: string | RegExp, flags: string | undefined = undefined): RegExpMatchArray | null
{
  if (typeof m === 'string') m = new RegExp(m, flags);
  return txt.match(m);
}

export function checkReplace(txt: string, m: string | RegExp, replace: string, flags: string | undefined = undefined): string
{
  if (typeof m === 'string') m = new RegExp(m, flags);
  return txt.replace(m, replace);
}

export function checkTest(txt: string, m: RegExp | string, flags: string | undefined = undefined): boolean
{
  if (typeof m === 'string') m = new RegExp(m, flags);
  return m.test(txt);
}

/** Сервис для работы со строками */
@Injectable({ providedIn: 'root' })
export class StringService
{
  private readonly _char0 = '0'.charCodeAt(0);
  private readonly _char9 = '9'.charCodeAt(0);

  private isDigit(str: string, index: number): boolean
  {
    const code = str.charCodeAt(index);
    return code >= this._char0 && code <= this._char9;
  }


  /**
   * Ленивая функция разделения строки на составляющие
   *
   * @param str Входная строка
   * @return Объект генератор
   */
  private *naturalSplit(str: string): Generator<{ isNumber: boolean, part: string | number }>
  {
    if (!str) return;

    let from = 0;
    let index = 0;

    let nextIsDigit = this.isDigit(str, 0);
    while (++index <= str.length)
    {
      const currentIsDigit = nextIsDigit;

      // Тут присвоение в условии сделано специально для оптимизации
      if (index === str.length || currentIsDigit !== (nextIsDigit = this.isDigit(str, index)))
      {
        const part = str.slice(from, index);
        from = index;
        yield { isNumber: currentIsDigit, part: currentIsDigit ? +part : part };
      }
    }
  }


  /**
   * Натуральное сравнение 2-х строк
   *
   * ```ts
   * compareStrings('10ff', '2ff') // => 1
   * ```
   *
   * @param str1 первая строка
   * @param str2 вторая строка
   */
  public compareStrings = (str1: string, str2: string) =>
  {
    const split1 = this.naturalSplit(str1);
    const split2 = this.naturalSplit(str2);

    while (true)
    {
      // Получаем части первой и второй строки
      const splitValue1 = split1.next();
      const splitValue2 = split2.next();

      // Проверяем есть ли обе части
      if (!!splitValue1.value && !!splitValue2.value)
      {
        if (splitValue1.value.isNumber === splitValue2.value.isNumber)
        {
          if (splitValue1.value.part < splitValue2.value.part) return -1;
          if (splitValue1.value.part > splitValue2.value.part) return 1;
        }
      }
      // Если какой-то части нет, значит эта строка меньше другой иначе равны
      else return (!!splitValue1.value)
        ? 1
        : (!!splitValue2.value)
          ? -1
          : 0;
    }
  }


  /**
   * Натуральная сортировка строк
   *
   * ```ts
   naturalSort(['10ff', '2ff']) // => ['2ff', '10ff']
   * ```
   *
   * @param strings Массив строк
   * @return Массив отсортированных строк
   */
  public naturalSort(strings: string[]): string[]
  {
    return strings.sort(this.compareStrings);
  }

  constructor() { }

  public checkMatch(txt: string, m: string | RegExp, flags: string | undefined = undefined): RegExpMatchArray | null
  {
    if (typeof m === 'string') m = new RegExp(m, flags);
    return txt.match(m);
  }

  public checkReplace(txt: string, m: string | RegExp, replace: string, flags: string | undefined = undefined): string
  {
    if (typeof m === 'string') m = new RegExp(m, flags);
    return txt.replace(m, replace);
  }

  public checkTest(txt: string, m: RegExp | string, flags: string | undefined = undefined): boolean
  {
    if (typeof m === 'string') m = new RegExp(m, flags);
    return m.test(txt);
  }
}
