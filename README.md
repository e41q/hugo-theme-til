# Today I Learned - fork

## Зачем форк?
Захотел изменить стили по своему вкусу.

Автор темы выложил демо и инструкцию для разработки на свой сайт. А сайт недоступен. Пришлось восстанавливать окружение для разработки.

В Hugo добавили сборку стилей через tailwind-cli, который запускает сам Hugo. Не надо запускать отдельно Hugo и сборку стилей в теме. Но, пришлось добавить @tailwind/cli в зависимости сайта (вроде как, можно поставить tailwindcss глобально, но я не стал вникать как).

## Разработка

```sh
git clone https://github.com/e41q/til-example-site.git hugo-til-examplesite;
cd hugo-til-examplesite; mkdir themes; cd themes;
git clone git@github.com:e41q/hugo-theme-til.git;
cd ../;
npm i;
hugo server
```
1. Склонировать [демо-сайт](https://github.com/e41q/til-example-site) (тоже мой форк)
2. создать внутри папку themes и перейти в неё
3. склонировать саму тему
4. вернуться в директорию демо-сайта
5. запустить сборку

...

Вуаля!
