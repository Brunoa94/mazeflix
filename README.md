# mazeflix

## Requirements

- **Node.js**: ^22.18.0 || >=24.12.0
- **npm**: 10.x

## Project Setup

```sh
cp .env.example .env
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests

```sh
npm run test
```

### Lint and Format

```sh
npm run lint
npm run lint:fix
npm run format
```

## Summary

This assignment had the objective of developing a Vue application using the TV Maze API. During development, the scalability of the project was always on my mind, enforcing a feature sliced pattern for the folder structure, as well as the atomicity of components and the single responsibility principle.
In terms of implementation, there were some design decisions that will be described later, which were supported by the usage of `@pinia/colada` for query creation and `@vueuse/core` for debouncing and auto focus on first render.

## Architecture

The architecture of this project was built not just thinking about fulfilling the requirements, but also about building a scalable architecture that could grow into a large production application. In terms of folder structure, a feature sliced pattern was followed in order to grant proper modularisation and reuse of components and functions. Each feature folder is composed of folders that contain the logic, UI or types of each feature module.
The shared folder also contains all the atomic components of the project in the components folder, such as Button, Input, Text or Link. Having the small parts of a big UI all centralized in the same folder promotes shareability, but also the implementation of a consistent design system, which is supported by a theme definition in the styles folder, through the usage of styling variants that can be easily defined and transferred from a Figma design. Apart from this, it also facilitates the implementation of accessibility labels, considering that they relate to most of these atomic components.

## Design decisions

### Search implementation

To implement the search functionality, the first thing to consider was API overload. For that, a debouncing mechanism was implemented, which only triggers the search when the user stops writing. Queries were also integrated (also used for the catalogue), which give access to a built in cache that reduces unnecessary refetching. Cached data can still be refetched when it becomes stale. Apart from this, the query's abort signal, managed by `@pinia/colada`, was also passed to `fetch` to support cancelling unnecessary requests.
The overlay approach was followed in order to make the component reusable and adaptable to every screen of the webpage without the usage of an additional global store. For proper accessibility, auto focus on the input when mounting and closing through Escape were implemented, as well as the proper aria labels for modal behaviour.

### Design System

As described in the architecture section, the core of the design system is the atomic components in the shared folder and the theme file defined in the styles folder. The variants inside each atomic component were built following the defined color palette and the shared positioning, which benefits the consistency of the whole UI.

### Error Handling

For error handling, a new class was created. The Error is caught in the root api client, from there it is mapped to the application error class and finally exposed through the query state of `@pinia/colada` to the UI side. Creating a class that is reused across all errors makes it possible to identify the endpoint associated with each error, and in the UI component to map each specific one to a specific component. Currently, the UI uses the shared `AppError` component to display the error message and the query's `refetch` function to retry the request.

### API side abstraction

On the API side, some levels of abstraction were applied that, for a single API application, might be overengineered. However, as described in the summary, I tried to build this application with scalability in mind. The createApiClient implements a factory pattern that only contains a get method (the only one needed), but other methods could be implemented. On creation, this function receives the domain and headers of each api client, which promotes reusability if different APIs are integrated into this project.

## Areas of Improvement

### Testing

Testing was only focused on the UI part through unit tests. The test suite could be improved by also integrating unit tests for functions with important logic, integration tests and end to end tests.

### Multipagination and Virtual list

The application currently fetches a single, fixed API page, which contains enough items to fill the home catalogue, and the search functionality allows searching for any shows other than the catalogue ones. Therefore, creating a multipagination system with an integrated virtual list would be a good and nice improvement for the application.

### Styling

The terms of styling the goal was to build something simple, eye catching and filling the requirements of responsiveness. This way improving the design to something more modern would also be a good improvement.
