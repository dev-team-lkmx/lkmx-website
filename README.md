# LKMX Website

Sitio web construido con Astro y Tailwind CSS.

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 🛠️ Herramientas de Calidad de Código

### ESLint

Linting de código JavaScript/TypeScript con configuración moderna (ESLint v9).

```bash
# Verificar problemas de linting
npm run lint

# Corregir problemas automáticamente
npm run lint:fix
```

**Nota**: Los archivos `.astro` se ignoran temporalmente debido a incompatibilidades con ESLint v9.

### Prettier

Formateo automático de código.

```bash
# Formatear todo el código
npm run format

# Verificar formato sin cambiar archivos
npm run format:check
```

### Husky + lint-staged

Hooks de Git que ejecutan linting y formateo automáticamente antes de cada commit.

### Commitlint + Commitizen

Sistema de validación de commits que asegura que todos los commits sigan el formato convencional:

- **feat**: Nueva funcionalidad
- **fix**: Corrección de bugs
- **docs**: Cambios en documentación
- **style**: Cambios de formato (no afectan funcionalidad)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o corregir tests
- **build**: Cambios en sistema de build
- **ci**: Cambios en configuración de CI
- **chore**: Otros cambios (no modifican src o tests)
- **revert**: Revertir commit anterior

## 📁 Estructura del Proyecto

```
lkmx-website/
├── src/
│   ├── pages/          # Páginas de Astro
│   └── styles/         # Estilos CSS
├── public/             # Archivos estáticos
├── .vscode/            # Configuración de VS Code
├── .husky/             # Hooks de Git
├── .eslintrc.cjs       # Configuración de ESLint
├── .prettierrc         # Configuración de Prettier
└── lkmx-website.code-workspace  # Workspace de VS Code
```

## 🔧 Configuración de VS Code

El proyecto incluye configuraciones optimizadas para VS Code:

- **Formateo automático** al guardar con Prettier
- **Linting automático** con ESLint
- **Soporte completo** para Astro
- **Integración** con Tailwind CSS
- **Extensiones recomendadas** preconfiguradas

### Abrir como Workspace

Para obtener la mejor experiencia de desarrollo, abre el archivo `lkmx-website.code-workspace` en VS Code.

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run lint` - Verificar problemas de linting
- `npm run lint:fix` - Corregir problemas de linting
- `npm run format` - Formatear código
- `npm run format:check` - Verificar formato
- `npm run commit` - Crear commit interactivo (commitizen)
- `npm run prepare` - Configurar Husky

## 🎨 Páginas Disponibles

- `/` - Página principal con demostración básica de Tailwind
- `/components` - Página de componentes con utilidades personalizadas

## 🎯 Flujo de Trabajo Recomendado

1. **Desarrollo**: Usa `npm run dev` para desarrollo local
2. **Linting**: Ejecuta `npm run lint` antes de hacer commit
3. **Formateo**: Usa `npm run format` para mantener consistencia
4. **Commit**: Usa `npm run commit` para crear commits interactivos que cumplan las reglas
5. **Validación**: Husky ejecutará automáticamente linting, formateo y validación de commits
6. **Construcción**: Usa `npm run build` para verificar que todo funcione

## 📚 Tecnologías

- **Astro** - Framework de sitios web estáticos
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático para JavaScript
- **ESLint v9** - Linting de código JavaScript/TypeScript (configuración moderna)
- **Prettier** - Formateo de código
- **Husky** - Hooks de Git (compatible con versiones futuras)
- **lint-staged** - Linting de archivos staged
- **Commitlint** - Validación de formato de commits
- **Commitizen** - Creación interactiva de commits
- **TypeScript** - Tipado estático para JavaScript
