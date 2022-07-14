import { Injectable } from '@angular/core';

/** Сервис для работы с динамическим кодом */
@Injectable({ providedIn: 'root' })
export class DynamicCodeService
{
  private functions = new Map<string, Function>();
  constructor() { }

  /** Получить динамический код по входным аргументом и коду выполнения */
  public getFunction(...args: string[]): Function
  {
    const key = args.join('\n');
    let result = this.functions.get(key);
    if (!result) this.functions.set(key, result = new Function(...args));

    return result;
  }
}
