# Getting started

## Set-up
### Vite

To install Flare run:

```bash
npm install @lkmx/flare
```

To set up Flare in the application add into `main.js`:

```javascript
import Flare from "@lkmx/flare";
app.use(Flare)
```

Finally, delete all styles from `./src/App.vue`

### NuxtJS

Add the following lines in nuxt.config.js to add the CSS globally:

```javascript
// Imports the CSS files
css: [
  './node_modules/@lkmx/flare/src/flare.scss',
],
```

Delete all styles from `pending`, `TBD`, and `etcetera`.

## Hello World

After setting up flare, any page can be styled 

```vue
<template>
  <simple-layout>
    <Page>
      <Columns>
        <Block>
          <h1>Hello World</h1>
          <p>This is a perfectly aligned page</p>
        </Block>
      </Columns>
    </Page>
  </simple-layout>
</template>
```