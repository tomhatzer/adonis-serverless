# adonis-serverless

This is an example repository for running [AdonisJS](https://github.com/adonisjs) on AWS Lambda. Work on this project has been done by [@satheler](https://github.com/satheler) with his package [s12r](https://github.com/satheler/s12r) and [@capopovici](https://github.com/capopovici) by making it compatible with version [5.1.9](https://github.com/adonisjs/core/releases/tag/v5.1.9) of AdonisJS.

## Installation

### Install the [s12r](https://github.com/satheler/s12r) package.

Using yarn:
```bash
yarn add @satheler/s12r
```

Using npm:
```bash
npm install @satheler/s12r
```

### Install the [serverless-plugin-typescript]() serverless plugin.

Using yarn:
```bash
yarn add serverless-plugin-typescript
```

Using npm:
```bash
npm install serverless-plugin-typescript
```

### Add custom Lambda handler.

Copy [lambda.ts](https://github.com/tomhatzer/adonis-serverless/blob/master/lambda.ts) to your project.

### Update your serverless configuration.

If you do not have a serverless.yml configuration already, you can copy the one from the repository and change a few values like:

- service
- region
- stage
- environment variables

### Update your tsconfig.json file.

Add additional `compilerOptions`:

```
    "baseUrl": ".",
    "preserveConstEnums": true,
    "strictNullChecks": true,
    "target": "ESNext",
    "moduleResolution": "node",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "noUnusedLocals": true,
    "skipLibCheck": true,
    "noUnusedParameters": true,
    "removeComments": true,
    "declaration": false,
    "lib": [
      "ESNext"
    ],
    "outDir": ".build",
```

## Credits

[@satheler](https://github.com/satheler)
[@capopovici](https://github.com/capopovici)