# lint-config
TS/JS/JSX/Astro linting configs for RPGSU's projects

## Install
Run:
```sh
pnpm add -D @rpgsu/lint-config
```

### Configs
This package exports the following ESLint configs:
- `javascript` for use with JavaScript projects
- `typescript` for use with TypeScript projects
- `astro` for use with Astro projects
- `react` for use with React projects
- `nodecg` for use with NodeCG projects _(this one is specifically made for the structure of RPGSU's NodeCG projects, usage with other NodeCG projects may not work as expected)_

There's also a Prettier config exported under `prettier` that adds the prettier-plugin-astro plugin.

To use the Prettier config, create the file `.prettierrc.js` and add this snippet there:
```js
import prettierConfig from "@rpgsu/lint-config/prettier";

export default prettierConfig;
```

## Note for using with pnpm
For using this package with pnpm, you need to create a file called `.npmrc` in the project root and add the following text into it:
```
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*prettier*
```

## Example usage
```js
import tsConfig from '@rpgsu/lint-config/typescript'

export default tsConfig;
```

## Recommended editor setup

### Visual Studio Code

Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), then press `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS), open `Preferences: Open User Settings (JSON)` and add this to the file:

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
```

This enable fix on save in VSCode for ESLint.

### JetBrains WebStorm

ESLint is enabled by default in WebStorm, the only recommended tweak is enabling ["fix on save" in ESLint settings](https://www.jetbrains.com/help/webstorm/eslint.html#ws_eslint_configure_run_eslint_on_save).

### Zed

ESLint is installed by default in Zed. In the settings go to Editor, and turn on Format on Save. 