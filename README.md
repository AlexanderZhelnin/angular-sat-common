# SatCommon
Библиотека с базовым функционалом

[Исходный код](https://github.com/AlexanderZhelnin/angular-sat-common)

## pipes
- SafeHtmlPipe. Селектор 'safehtml' установка hml из кода
- SafeStylePipe. Селектор 'safestyle' установка стиля из кода
- SafeUrlPipe. Селектор 'safeurl' установка адреса из кода
- SkipPipe. Селектор 'skip' пропуск определённого количества элементов в массиве
- TakePipe. Селектор 'take' получение определённого количества элементов из массива
## services
- StringService сервис для работы со строками, в нём находится натуральная сортировка строк
```ts
compareStrings('10ff', '2ff') // => 1
```
```ts
naturalSort(['10ff', '2ff']) // => ['2ff', '10ff']
```
[![Видео](logo_68.png)](https://youtu.be/aEVe4uFnlnk)
## functions
- groupBy функция группировки по значению
```ts
groupBy([
  { id: 1, name: 'test1' },
  { id: 2, name: 'test1' },
  { id: 3, name: 'test2' },
], p => p.name);
// => { test1: [{ id: 1, name: 'test1' }, { id: 2, name: 'test1' }], test2: { id: 3, name: 'test2' } }
```
- deepClone функция глубокого копирования
```ts
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
## types
- DeepReadonly<T> тип глубокой иммутабельности
[![Видео](logo_114.png)](https://youtu.be/Kxe_o9l-b44)

## animations
- SHOW анимация для плавной показа новых элементов и плавного скрытий удаляемых элементов
- VISIBILITY анимация плавного скрытия видимости и плавного показа видимости
