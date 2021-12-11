module.exports = {
    env: {
        "browser": true,
        "es2021": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "jsx-a11y",
    ],
    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "react/jsx-props-no-spreading": "off",
        "indent": [
            "error",
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never",
            },
        ],
        "linebreak-style": [
            "error",
            "windows",
        ],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "always",
        ],
        "prettier/prettier": "error",
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            "typescript": {
                alwaysTryTypes: true,
                project: "tsconfig.json",
            },
        },
    },
};
