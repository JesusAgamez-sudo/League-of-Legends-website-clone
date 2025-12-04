# Deployment Guide

## GitHub Pages Deployment

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Pasos para Desplegar:

1. **Crear un repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/scalar-meteorite.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: selecciona "GitHub Actions"

3. **Actualizar vite.config.js**
   - Abre `vite.config.js`
   - Cambia `base: '/scalar-meteorite/'` por el nombre de tu repositorio
   - Ejemplo: si tu repo es `lol-clone`, usa `base: '/lol-clone/'`

4. **Push y Deploy**
   ```bash
   git add .
   git commit -m "Update base path"
   git push
   ```

El sitio se desplegará automáticamente en: `https://tu-usuario.github.io/scalar-meteorite/`

## Alternativa: Vercel Deployment

Si prefieres usar Vercel:

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configuración**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Alternativa: Netlify Deployment

Si prefieres usar Netlify:

1. **Crear netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```

2. **Deploy**
   - Conecta tu repositorio en netlify.com
   - O usa Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

## Build Local

Para probar la build de producción localmente:

```bash
npm run build
npm run preview
```

Esto iniciará un servidor local en http://localhost:4173
