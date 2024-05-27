# 09-component-by-vue-cli

# How to add TailwindCss
1. run `pnpm i -D tailwindcss postcss autoprefixer`
2. run `npx tailwindcss init -p`
3. update tailwind.config.js
   ```
   module.exports = {
      content: [
         "./public/index.html",
         "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
      theme: {
         extend: {},
      },
      plugins: [],
   }
   ```
4. make `src/assets/tailwind.css` with below content
   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. inside `app.js` put this `import './assets/tailwind.css'`

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
