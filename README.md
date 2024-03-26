# Development

Pasos para levantar la app de desarrollo

1. Clonar el repositorio backend-devtallesSorteo de el repositorio https://github.com/juan-ma526?tab=repositories
2. Seguir las instrucciones del repositorio para levantar el backend localmente.
3. Crear una copia de el .env.template y renombrarlo a .env
4. Reemplazar las variables de entorno
5. Entrar a https://discord.com/developers/applications y crear una aplicacion, ponerle el nombre que quieras.
6. Entrar a la app creada en la api de discord y ir a "OAuth2"
7. Copiar el ClientID y generar el ClientSecret y copiarlos al archivo .env
8. Ir a la pestaña bot en discord Api, y hacer click en reset token y copiar el valor en token en el archivo .env
9. Ir a OAuth2 dentro de discord api, en Redirects pegar esta direccion "http://localhost:3000/api/auth/discord/redirect" sin las comillas.
10. En OAuth2 URL Generator marcar las opciones que quieran que este disponible.
11. En GENERATED URL seleccionar la direccion disponible y copiar la direccion que te da discord api.
12. Pegar dicha direccion en el componente sorteo agregandole al final de read (&state=) sin el parentesis.
13. Ejecutar el comando `npm install` para reconstruir los modulos de node
14. Ejecutar estos comandos de Prisma

# Prisma Commands

```
npx prisma generate
```

15. Ejecutar el comando `npm run dev` para ejecutar la aplicacion en desarrollo

## Nota: Usuario por defecto

**usuario** admin@google.com
**password** 1234

## Nota: Si solo quieres probar la App ya esta hecho el deploy solo usar el usuario para el login, o registrar uno nuevo y probarla

https://devtalles-codequest-sorteos-gamma.vercel.app/
