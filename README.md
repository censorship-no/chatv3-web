# Установка и запуск внутри nodeenv для разработки

Находясь в папке проекта выполните следующие команды:

```bash
nodeenv --node=18.2.0 ./nodeenv
source ./nodeenv/bin/activate
npm install -g pnpm
pnpm install
export NODE_OPTIONS=--no-experimental-fetch
pnpm run start
```

Последняя команда запустит два сервиса для локальной разработки:
http://localhost:3333 - sanity
http://localhost:4200 - web

Также есть возможность запуска каждого приложения в режиме разработчика по отдельности.
Для этого необходимо в папке каждого приложения выполнить команду

```bash
pnpm run serve
```
Список доступных команд можно посмотреть в файлах package.json

Для того чтобы свежие правки попали на продакшен сайт, после каждого изменения в Sanity необходимо запустить сборку и деплой web приложения.

Для сборки проекта доступны следующие команды
```bash
# Запуск сборки проекта sanity и статического сайта на gatsby
# файлы будут доступны по этим путям
# apps/studio/dist - проект sanity
# apps/web/public - сайт на gatsby
pnpm run build
```
Также доступна сбрка для каждого из проектов по-отдельности
```bash
pnpm run build:sanity # сборка в папку apps/studio/dist
```
и
```bash
pnpm run build:web # сборка в папку apps/web/public
```

Экспорт схемы GraphQl

в папке с проектом sanity запустить команду
```bash
npx sanity graphql list

```

## Порядок изменения схемы

1. Правка схемы в `apps/studio`
2. Экспорт схемы
```bash

pnpm run graphql-deploy
# Возможно потребуется логин в  sanity. Для логина запустите
# npx sanity login
```
3. Опционально. Экспорт TS схемы

В папке `apps/web`
4. Очистить кеш Gatsby
```bash
pnpm run clean-cache
```
5. Запустить сборку Gatsby (dev или prod в зависимости от задачи)



## Tips & tricks


### Экспорт типов
При изменении схемы может быть полезно сделать экспорт типов Typescript на основе схемы Sanity

Чтобы это сделать запустите команду
```bash
pnpm run types
```

Готовые файлы будут экспортированы в папку `apps/web/typings/schema.ts`

NB: При экспорте типов в итоговый файл также попадают внутренние мета дженерики. Для корректного использования типов требуется удалить дженерики `SanityReference` и `SanityKeyedReference` из файла `apps/web/typings/schema.ts`


### Экспорт GraphQL схемы

From here https://github.com/sanity-io/sanity/issues/2533

This is not documented, as the primary intention is not for it to be used by users, but there is a way to get the schema. You can currently get it in two different formats.

To get the schema in GraphQL SDL format, you can use the following query:
```bash
curl --location --request GET 'https://<projectId>.api.sanity.io/v1//apis/graphql/<dataset>/<tag>' \
--header 'Accept: application/graphql'
```
To get it in JSON format you can use the following query:
```bash
curl --location --request GET 'https://<projectId>.api.sanity.io/v1//apis/graphql/<dataset>/<tag>' \
--header 'Accept: application/json'
```
We will probably not document this yet, as it's a subject for change at the moment. Keep that in mind. We are working on improving this down the road, though.
