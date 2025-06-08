# Hack with React ⚛️

The idea here is to build a web application in React so I can dive deeper into React concepts.

This is a _music-based_ application where you can search for music albums, create one if missing and tag your favorite
ones.

It's currently build with Vite, written in TypeScript and powered by React.


## TODO 📋

Progress: 1 / 13 (7.7 %)

Here is what I would like to do:
- [x] Show a list of known albums, filterable by search criteria or favorite
- [ ] Mark / unmark an album as favorite (-> handle global stater / context w/ [Valtio](https://valtio.dev/) ?)
- [ ] Setup [Tailwind](https://tailwindcss.com/docs/installation/using-vite) to improve UI & enable responsiveness
- [ ] Include songs with their genre / duration ( -> nesting )
- [ ] Create a new album (-> [validation](https://www.npmjs.com/package/class-validator#validation-decorators) of a [React `<form>`](https://react.dev/reference/react-dom/components/form)
- [ ] Create an Album view ( play with [React router](https://reactrouter.com/) )
- [ ] Add album cover and allow to add / change from an external API ( -> `useEffect` _hook_ )
- [ ] Delegate data management to an external service using DIC w/ [`inversify` in React](https://itnext.io/dependency-injection-in-react-using-inversifyjs-now-with-react-hooks-64f7f077cde6) ( -> use of `useContext` _hook_)
- [ ] Setup [Vitest]() to run unit tests ( play with in memory service to mock DIC services -> _dependency inversion_ )
- [ ] Persist data to `indexedDb` ([🔗 doc](https://web.dev/articles/indexeddb?hl=fr)) (-> `useDeferredQuery` & `useCallback` _hooks_ )
- [ ] Sync data with a backend using [tRPC](https://trpc.io/docs/) ( use [Turbo](https://turborepo.com/docs) workspaces )
- [ ] Setup [Playwright in CI](https://playwright.dev/docs/ci-intro)
- [ ] Create a PWA worker to fetch for new records