# appendTsSuffixTo error log problem
.vue.ts file extension when appearing in logs prevent VS Code from letting the programmer click the error line and end up at the right place.

## To run
yarn
yarn build

## Output
ERROR in C:\DeveloperArea\Troubleshooting\vue_ts\MyComponent.vue.ts
12:12-18
[tsl] ERROR in C:\DeveloperArea\Troubleshooting\vue_ts\MyComponent.vue.ts(12,13)
      TS2552: Cannot find name 'onCick'. Did you mean 'onClick'?

Would need the file extensions to be .vue to match files that actually exist on file system.