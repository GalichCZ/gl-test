## George FE test task

### How to use

1. install dependencies

    ```yarn```
2. generate flags

    ```yarn flags```
3. run project, it will start on port :5173

    ```yarn dev```

### Realised features

The page have a header and a search bar at the top.

When the user is scrolling the page, the header scrolls off the page, but the search bar sticks to the top and stays there.

Below the header and the search bar is a list of all currencies.

Each currency list item contains:

- Flag of the country
- Name of the country
- Currency of the country
- Exchange rate of that currency
- The currencies should be searchable. The list should update according to the search results.
- The search term should also be present in the URL hash and deep linking should work accordingly.

### Used technologies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Tailwind](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)

### Limitations

Unfortunately, there are some limitations in provided data. Country names are not provided, some exchange rates are not provided.
But it is understandable, it is just a mock data, project is prepared for real data, except of pagination.

### Possible improvements

- Add pagination
- Add CI/CD
- Add Virtualization
- Add E2E tests

### License

MIT