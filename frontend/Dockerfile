# Node.js & Nginx для фронтенда
FROM node:18-slim as build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Строим фронтенд проект с Vite
RUN npm run build

# Nginx для фронтенда
FROM nginx:alpine

# Копируем собранные файлы
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт для Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]