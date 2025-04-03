// eslint.config.js
module.exports = {
  extends: [
    'eslint:recommended', // Configuração recomendada do ESLint
    'plugin:react/recommended', // Configuração recomendada para React
    'plugin:@typescript-eslint/recommended', // Configuração recomendada para TypeScript
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // Usar o parser do TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Habilita a análise de JSX
    },
  },
  plugins: ['react', '@typescript-eslint'], // Plugins necessários
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Detecta a versão do React automaticamente
    },
  },
  ignores: [
    '**/node_modules/**', // Ignora node_modules
    '**/*.min.js',         // Ignora arquivos minificados
    '**/dist/**',           // Ignora diretórios de build
  ],
};
