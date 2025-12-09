TEMP
# Velas Artesanales - Proyecto Final

Repositorio del proyecto "Velas Artesanales" — una tienda simple de velas hechas a mano (React + Vite + Bootstrap).

## Resumen

- Frontend en React (Vite). Usa React Router para rutas y React Bootstrap para componentes visuales.
- Context API para estado global: autenticación, carrito, productos y búsqueda.
- Datos de productos obtenidos desde una API mock (MockAPI).

## Requisitos

- Node.js 16+ (recomendado 18+)
- npm o yarn

## Instalar y ejecutar (PowerShell)

1. Abrir terminal en la raíz del proyecto:

```powershell
cd C:\Users\Magali\Desktop\proyecto-final-25235-MagaliOrellana
```

2. Instalar dependencias:

```powershell
npm install
# o con yarn
# yarn
```

3. Ejecutar en modo desarrollo:

```powershell
npm run dev
```

La app correrá (por defecto Vite) en `http://localhost:5173` o el puerto alternativo que muestre la consola.

4. Generar build de producción:

```powershell
npm run build
```

## Uso y rutas principales

- `/` - Home
- `/productos` - Listado de productos (filtrado por categoría y búsqueda)
- `/ofertas` - Página de ofertas
- `/carrito` - Página del carrito (lista los productos agregados, permite cambiar cantidades y vaciar)
- `/admin` - Panel de administración (solo accesible si se inicia sesión como admin)

## Inicio de sesión (credenciales)

Para probar el rol de administrador utiliza las siguientes credenciales en la página de `Mi Cuenta` (login):

- Email: `admin@velas.com`
- Contraseña: `123456`

Con estas credenciales la app establecerá el rol `admin` y te redirigirá a `/admin`.

Si ingresás con cualquier otro email/contraseña la app iniciará sesión como usuario normal (`role: 'user'`).

Comportamiento relacionado con admin:
- Cuando un usuario es admin, el icono del carrito en el header se oculta.
- En `/admin` puedes crear, editar y eliminar productos. Al eliminar se muestra un modal de confirmación.

## Búsqueda

- La barra de búsqueda en el header muestra lo que escribís inmediatamente.
- El filtrado de resultados se aplica solamente cuando el texto tiene 4 o más caracteres.
- También podés presionar `Enter` en la búsqueda (con 4+ caracteres) para navegar a `/productos` y ver las tarjetas filtradas.

## Carrito

- Al hacer clic en "Agregar al carrito" en una tarjeta de producto, el item se agrega al carrito y se actualiza el badge en el header.
- La página `/carrito` muestra el listado de productos agregados, cantidad, subtotal por producto y total final.
- Podés aumentar/disminuir cantidad o eliminar productos individualmente.

## Archivos relevantes

- `src/components/Header.jsx` - Header, search, badge de carrito.
- `src/components/ProductCard.jsx` - Tarjeta de producto y botón "Agregar al carrito".
- `src/components/ListaProductos.jsx` - Lógica de filtrado y paginación.
- `src/pages/Carrito.jsx` - Página del carrito (lista y resumen).
- `src/pages/Admin.jsx` - Panel de administración (alta/edición/eliminación de productos).
- `src/components/Login.jsx` - Componente de login (credenciales de admin visibles en el código para pruebas).
- `src/context/ProductsContext.jsx` - Carga de productos desde la API mock.
- `src/context/CartContext.jsx` - Lógica del carrito (add/remove/decrease, totales).
- `src/context/SearchContext.jsx` - Estado de búsqueda (`query`, `searchTerm`) y `submitSearch`.

## API de productos

Los productos se cargan desde:

```
https://69378381f8dc350aff346c21.mockapi.io/products
```

Si necesitás cambiar la API, actualizá la constante `URL_API` en `src/context/ProductsContext.jsx`.

## Notas adicionales

- El proyecto es una demo educativa; las credenciales de admin están en claro para facilitar pruebas.
- Para producción: reemplazar la autenticación por un sistema seguro, ocultar credenciales y usar HTTPS/Back-end real.

Si querés, puedo agregar:
- un script `npm run start` que abra el navegador automáticamente;
- instrucciones para desplegar (Netlify, Vercel o GitHub Pages);
- tests unitarios básicos para componentes principales.

---
Si querés, lo subo al repo ahora o hago cambios en el README según prefieras. ¿Querés que agregue instrucciones de despliegue a Netlify o Vercel? 
# Velas Artesanales - Proyecto Final

Repositorio del proyecto "Velas Artesanales" — una tienda simple de velas hechas a mano (React + Vite + Bootstrap).

## Resumen

- Frontend en React (Vite). Usa React Router para rutas y React Bootstrap para componentes visuales.
- Context API para estado global: autenticación, carrito, productos y búsqueda.
- Datos de productos obtenidos desde una API mock (MockAPI).

## Requisitos

- Node.js 16+ (recomendado 18+)
- npm o yarn

## Instalar y ejecutar (PowerShell)

1. Abrir terminal en la raíz del proyecto:

```powershell
cd C:\Users\Magali\Desktop\proyecto-final-25235-MagaliOrellana
```

2. Instalar dependencias:

```powershell
npm install
# o con yarn
# yarn
```

3. Ejecutar en modo desarrollo:

```powershell
npm run dev
```

La app correrá (por defecto Vite) en `http://localhost:5173` o el puerto alternativo que muestre la consola.

4. Generar build de producción:

```powershell
npm run build
```

## Uso y rutas principales

- `/` - Home
- `/productos` - Listado de productos (filtrado por categoría y búsqueda)
- `/ofertas` - Página de ofertas
- `/carrito` - Página del carrito (lista los productos agregados, permite cambiar cantidades y vaciar)
- `/admin` - Panel de administración (solo accesible si se inicia sesión como admin)

## Inicio de sesión (credenciales)

Para probar el rol de administrador utiliza las siguientes credenciales en la página de `Mi Cuenta` (login):

- Email: `admin@velas.com`
- Contraseña: `123456`

Con estas credenciales la app establecerá el rol `admin` y te redirigirá a `/admin`.

Si ingresás con cualquier otro email/contraseña la app iniciará sesión como usuario normal (`role: 'user'`).

Comportamiento relacionado con admin:
- Cuando un usuario es admin, el icono del carrito en el header se oculta.
- En `/admin` puedes crear, editar y eliminar productos. Al eliminar se muestra un modal de confirmación.

## Búsqueda

- La barra de búsqueda en el header muestra lo que escribís inmediatamente.
- El filtrado de resultados se aplica solamente cuando el texto tiene 4 o más caracteres.
- También podés presionar `Enter` en la búsqueda (con 4+ caracteres) para navegar a `/productos` y ver las tarjetas filtradas.

## Carrito

- Al hacer clic en "Agregar al carrito" en una tarjeta de producto, el item se agrega al carrito y se actualiza el badge en el header.
- La página `/carrito` muestra el listado de productos agregados, cantidad, subtotal por producto y total final.
- Podés aumentar/disminuir cantidad o eliminar productos individualmente.

## Archivos relevantes

- `src/components/Header.jsx` - Header, search, badge de carrito.
- `src/components/ProductCard.jsx` - Tarjeta de producto y botón "Agregar al carrito".
- `src/components/ListaProductos.jsx` - Lógica de filtrado y paginación.
- `src/pages/Carrito.jsx` - Página del carrito (lista y resumen).
- `src/pages/Admin.jsx` - Panel de administración (alta/edición/eliminación de productos).
- `src/components/Login.jsx` - Componente de login (credenciales de admin visibles en el código para pruebas).
- `src/context/ProductsContext.jsx` - Carga de productos desde la API mock.
- `src/context/CartContext.jsx` - Lógica del carrito (add/remove/decrease, totales).
- `src/context/SearchContext.jsx` - Estado de búsqueda (`query`, `searchTerm`) y `submitSearch`.

## API de productos

Los productos se cargan desde:

```
https://69378381f8dc350aff346c21.mockapi.io/products
```

Si necesitás cambiar la API, actualizá la constante `URL_API` en `src/context/ProductsContext.jsx`.

## Notas adicionales

- El proyecto es una demo educativa; las credenciales de admin están en claro para facilitar pruebas.
- Para producción: reemplazar la autenticación por un sistema seguro, ocultar credenciales y usar HTTPS/Back-end real.

Si querés, puedo agregar:
- un script `npm run start` que abra el navegador automáticamente;
- instrucciones para desplegar (Netlify, Vercel o GitHub Pages);
- tests unitarios básicos para componentes principales.

---
Si querés, lo subo al repo ahora o hago cambios en el README según prefieras. ¿Querés que agregue instrucciones de despliegue a Netlify o Vercel? 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
