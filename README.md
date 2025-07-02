# Blogify

Proyecto Ruby on Rails con React y PostgreSQL.

## Requisitos previos

- Ruby (versión recomendada: 3.x)
- Rails (versión recomendada: 7.x)
- Node.js y npm
- PostgreSQL
- Overmind (para manejo de procesos)
- Bundler
- Shakapacker

---

## Instalación

1. Instala las dependencias Ruby:

```bash
bundle install
```

2. Instala las dependencias JavaScript:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido o modifica los valores directamente en /config/database.yml:

```
BLOGIFY_DB_NAME=<database_name>
BLOGIFY_DB_USERNAME=<username>
BLOGIFY_DB_PASSWORD=<password>
BLOGIFY_DB_HOST=localhost
BLOGIFY_DB_PORT=5432

RAILS_MAX_THREADS=5
```

> Reemplaza `<database_name>`, `<username>` y `<password>` por los valores reales de tu configuración local de PostgreSQL.

4. Resetea la base de datos (opcional, si deseas partir desde cero):

```bash
rails db:drop
```

5. Crea la base de datos:

```bash
rails db:create
```

6. Ejecuta las migraciones:

```bash
rails db:migrate
```

7. Inicia la aplicación con Overmind (usando `Procfile.dev`):

```bash
overmind start -f Procfile.dev
```

---

¡Listo! Ahora puedes abrir tu navegador en [http://localhost:3000](http://localhost:3000) y comenzar a trabajar en Blogify.
