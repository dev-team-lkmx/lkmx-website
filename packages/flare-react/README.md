# Flare-React 
- [Flare-React](#flare-react)
- [Documentation](#documentation)
  - [Next.js](#nextjs)
    - [Prerequisites](#prerequisites)
    - [Create a new project](#create-a-new-project)
    - [Install Flare](#install-flare)
    - [Create layout](#create-layout)
    - [Create first page](#create-first-page)
- [Development](#development)


# Documentation

## Next.js

Use [Next](https://nextjs.org/) to quickly scaffold your project.


### Prerequisites

- Node.js 14.18.0 or later.

### Create a new project

```
yarn create next-app my-project
```

### Install Flare

Add Flare-React to dev dependencies.

Go to the project directory:
```
cd my-project/
``` 

With Yarn:
```
yarn add @lkmx/flare-react
yarn install
```

Import into ```next.config.js``` Flare dependencies and import Flare mixins.

```
const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve = {
        alias: {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, ''),
            components: path.resolve(__dirname, 'components')
        }
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "main.scss";
      @import "@lkmx/flare/mixins";
    `
  }
}

```

Import into `/pages/_app.js` Flare css.
```
import '@flare/flare.scss';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

import into `/pages/_document.js` Body component.

```
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Body } from '@lkmx/flare-react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <Body>
          <Main/>
          <NextScript/>
        </Body>
      </Html>
    );
  }
}
```

Run the proyect:

```
yarn run dev
```

### Create layout

Create into ```components/``` directory the following components:

```header.js```
```
import React from "react";
import { Column, Block } from '@lkmx/flare-react';

export default function Header() {
  return (
    <header>
      <Column>
        <Block>
          <h1>Header</h1>
        </Block>
      </Column>
    </header>
  );
}
```

```footer.js```
```
import React from "react";
import { Column, Block } from '@lkmx/flare-react';

export default function Footer() {
  return (
    <footer>
      <Column>
        <Block>
          <h1>Footer</h1>
        </Block>
      </Column>
    </footer>
  );
}
```

```layout.vue```

```
import React from "react";
import Footer from 'components/footer.js';
import Header from 'components/header.js';

export default function Layout(props) {

  const style = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh'
  }

  return (
    <div style={style}>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  );
}
```

### Create first page

Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.

```
import React from "react";
import Layout from 'components/layout.js';
import { Page, Column, Block } from '@lkmx/flare-react';

export default function FirstPage() {
  return (
    <Layout>
      <Page>
        <Column>
          <Block>
            <h1>Flare it's easy to use</h1>
            <p>Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.</p>
          </Block>
        </Column>
      </Page>
    </Layout>
  );
}
```

# Development

Pending