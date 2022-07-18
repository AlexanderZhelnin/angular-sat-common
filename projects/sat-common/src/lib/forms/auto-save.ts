import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, Observable, Subscription } from "rxjs";

/**
 * Декоратор автосохранения данных формы
 * @param key Ключ для сохранения в кэш данных формы при изменении
 * @param [stor=localStorage] Хранилище кэша, по умолчанию это localStorage
 * @param [parse=JSON.parse] Преобразователь в строку
 * @param [stringify=JSON.stringify] Преобразователь из строку
*/
export function autoSave(
  key: string | Promise<string> | Observable<string>,
  stor: Storage = localStorage,
  parse: ((text: string, reviver?: (this: any, key: string, value: any) => any) => any) = JSON.parse,
  stringify: ((value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number) => string) = JSON.stringify
): PropertyDecorator
{
  return (target: Object, propertyKey: string | symbol) =>
  {
    const view = target as OnDestroy;
    let subs: Subscription | undefined;
    const originalOnDestroy = view.ngOnDestroy;
    view.ngOnDestroy = function ()
    {
      subs?.unsubscribe();
      originalOnDestroy?.apply(this);
    };

    let val = (target as { [key: string | symbol]: any; })[propertyKey];

    const getter = () => val;

    const setter = (v: FormGroup) =>
    {
      subs?.unsubscribe();
      val = v;

      if (!v) return;

      if (typeof key === 'string')
        subs = createSetter(stor, key, v, parse, stringify, subs);
      else if (key instanceof Observable)
        key.subscribe({ next: k => subs = createSetter(stor, k, v, parse, stringify, subs) });
      else if (key instanceof Promise)
        key.then(k => subs = createSetter(stor, k, v, parse, stringify, subs));
    };

    Object.defineProperty(
      target,
      propertyKey,
      {
        get: getter,
        set: setter
      });
  };
}

/** Создать сеттер обертку для свойства */
function createSetter(
  stor: Storage,
  key: string,
  v: FormGroup<any>,
  parse: ((text: string, reviver?: (this: any, key: string, value: any) => any) => any),
  stringify: ((value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number) => string),
  subs: Subscription | undefined)
{
  subs?.unsubscribe();
  const oldValue = stor.getItem(key);
  if (!!oldValue)
    v.patchValue(parse(oldValue) as { [key: string]: any; });

  return v.valueChanges
    .pipe(debounceTime(100))
    .subscribe({ next: ch => stor.setItem(key, stringify(ch)) });
}

/**
 * Отчистка кэша формы
 * @param key Ключ для сохранения в кэш данных формы при изменении
 * @param [stor=localStorage] Хранилище кэша, по умолчанию это localStorage
 */
export function autoSaveClear(
  key: string | Promise<string> | Observable<string>,
  stor: Storage = localStorage): void
{
  if (typeof key === 'string')
    stor.removeItem(key);
  else if (key instanceof Observable)
    key.subscribe({ next: k => stor.removeItem(k) });
  else if (key instanceof Promise)
    key.then(k => stor.removeItem(k));
}
