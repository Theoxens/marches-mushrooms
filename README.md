<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<style>
  @font-face {
    font-family: "Cormorant Garamond";
    src: url("../fonts/CormorantGaramond-Light.woff2") format("woff2"),
      url("../fonts/CormorantGaramond-Light.woff") format("woff"),
      url("../fonts/CormorantGaramond-Light.ttf") format("truetype");
  }
</style>

<p align="center">
  <a href="https://www.marchesmushrooms.co.uk">
    <img alt="Gatsby" src="./src/icons/MM-icon.inline.svg" width="60" />
  </a>
</p>
<h1 align="center">
  <span style="font-family: Cormorant Garamond;">MARCHES MUSHROOMS</span>
  <p>&nbsp;</p>
</h1>

<p>&nbsp;</p>

This is the source code fof the [Marches Mushrooms](https://marchesmushrooms.co.uk) website.

A [Gatsby](https://gatsbyjs.org) site, hosted on [Netlify](https://netlify.com).

<p>&nbsp;</p>

---

<p>&nbsp;</p>

<h2 align="center">Installing Node & Git</h2>

This website is based on Node.

This requires a copy of Node to be installed on the machine.
To check if Node is installed type the following into an open terminal anywhere on the machine:

```bash
node -v
```

This should respond with the version number if it is installed e.g:

```bash
v12.14.1
```

If node is not installed there will be an error message something like:

```bash
node: command not found
```

To install node: go to the website at https://nodejs.org/en/download/ and download the appropriate installer for your system, following their instructions.

---

<p>&nbsp;</p>

Many of the commands will also require Git to be installed on the machine.

To check if Git is installed locally type the following in the terminal:

```bash
git --version
```

This should respond with the current installed Git version number e.g:

```bash
git version 2.19.2windows.1
```

If not there will be an error something like:

```bash
git: command not found
```

---

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<h2 align="center">🚀 Basic Commands</h2>

1.  **To install a fresh local copy.**

- Open a terminal inside the folder you want to install the project in.

- Fetch the source code from github with the following command:

  ```bash
  git clone https://github.com/acacia-marquees/website.git
  ```

- Install the dependencies locally with the following command:

  ```bash
  npm install
  ```

- Create a `.env` file in the project's root directory, and fill in the environment variables - see environment variables section below.

  <p>&nbsp;</p>

2.  **Start developing.**

    In a terminal inside the website directory type the command:

    ```bash
    npm run start
    ```

    <p>&nbsp;</p>

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    <p>&nbsp;</p>

4.  **Run a development copy with network accessability.**

    In a terminal inside the website directory type the command:

    ```bash
    npm run start:hosted
    ```

    The site can now be accessed from other devices on the network using the ip address of the host machine and port 8000.

    eg. host machine = 192.168.1.8

    in the browser go to: 192.168.1.8/8000

    <p>&nbsp;</p>

5.  **Run a production copy locally.**

    In a terminal inside the website directory type the command:

    ```bash
    npm run build && npm run serve
    ```

    A production copy of your site is now running at `http://localhost:9000`

    <p>&nbsp;</p>

6.  **Empty local cache.**

    To clear the local cache type the command:

    ```bash
    npm run clean
    ```

    <p>&nbsp;</p>

---

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── content
    ├── graphql
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── index.d.ts
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json

- **`/content`**: This directory contains all of the page data and assets to populate the website.

- **`/graphql`**: This directory contains the graphql types, and resolvers needed for gatsby's data layer. Any data needed to create the pages must be included in the appropriate schema in `/graphql/types`. The custom resolvers in `/graphql/resolvers` can perform operations on the data being fetched for page creation - such as fetching all related posts and passing in the necessary links to the page.

- **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

- **`/public`**: This directory is created at build time, and contains the production code to be served by the web-host.

- **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code” see the next section for details of the contained directories.

- **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

- **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

- **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

- **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

- **`index.d.ts`**: This file contains custom typescript declarations used within this project. This allows typescript to compile non-ts modules.

- **`LICENSE`**: This Website is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

- **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

- **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

- **`README.md`**: A text file containing useful reference information about your project.

- **`tsconfig.json`**: A configuration file used by the typescript compiler.

---

<p>&nbsp;</p>

### `/src` directory

    └── src
        ├── components
        ├── fonts
        ├── graphql-fragments
        ├── hooks
        ├── icons
        ├── images
        ├── pages
        ├── scss
        ├── templates
        ├── titles
        ├── utils

- **`/components`**: This directory contains the React Components.

- **`/fonts`**: This directory contains the non-system fonts.

- **`/graphql-fragments`**: This directory contains any graphql fragments used in data fetching.

- **`/hooks`**: This directory contains the react hooks.

- **`/images`**: This directory contains the site's icons.

- **`/images`**: This directory contains the site's images.

- **`/pages`**: This directory contains the website pages that do not require custom build logic, and will be automatically created by Gatsby. The file structure of this directory represents the page locations on the website.

- **`/scss`**: This directory contains the scss rules used to style the website.

- **`/templates`**: This directory contains the templates used by `gatsby-node.js` to create the pages of the website that require a custom build stage.

- **`/utils`**: This directory contains helper functions.

---

<p>&nbsp;</p>
<p>&nbsp;</p>

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com)

<!-- AUTO-GENERATED-CONTENT:END -->
