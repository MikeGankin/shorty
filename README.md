# 🔗 Shorty — Сервис сокращения ссылок

Минималистичное Nuxt 3 SPA-приложение для авторизованных пользователей, позволяющее сокращать ссылки, хранить их в
Firebase и быстро делиться короткими URL.

---

## ⚙️ Технологии

- [Nuxt 3](https://nuxt.com) (SPA-режим)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [Pinia](https://pinia.vuejs.org/) — глобальное хранилище
- [Vercel](https://vercel.com) — деплой фронтенда
- [Tailwind CSS](https://tailwindcss.com) — стилизация

---

## 🚀 Возможности

- Регистрация и авторизация пользователей
- Хранение ссылок в Firestore под `users/{uid}/links`
- Генерация коротких URL через `nanoid`
- Поддержка автологина при повторном входе
- Автоматическая подстановка email
- Скелетоны при загрузке ссылок
- Поддержка Vercel-деплоя

---

## 📦 Установка

```bash
npm install
