# Welcome to cineApp

## Launch API

### Getting Started: Insall node modules

```
cd api/
yarn install
```

### Load env variables
On the same directory (/api)

```
cp .env/example .env
```
and fill `TMDB_API_KEY` with the API KEY you sent to me for the test


### Start server
```yarn dev
```

### Technical choices:

I created an API that exposes the IMDB API. The API communicates with the web application with graphQL.

`graphql` gives the power to define the data to retrieve from a server, combined with `type-graphql` it allows to create a type-safe chain. The latter allows to create schemas, types and resolvers only with TypeScript, using classes and decorators.
Pour la simplicité du test on va se focaliser que sur le mode developpement coté front et back.

I used `nodemon`* to run the server in dev mode, which will allow rapid development by taking into account changes to the code without the need to restart the server.

### Folder structure
The code is structured in the form of modules, to guarantee independence between the different sections:

- `src/index.ts`: Entrypoint file to launch the Apollo server with express in the background
- `src/resolvers`: The set of controllers that contain the business rules
- `src/services`: Contains the connection with third-party APIs, called in this case from resolvers to receive data from the TMDb API
- `src/utils`: Contains the different types and constants, which will make changes quick and centralized when needed.


## Launch Portal

### Getting Started: Insall node modules

```
cd web/
yarn install
```

### Note about env variables
For the simplicity of the test, and since it does not represent any security risk, I chose to put the `.env` file on the repo and not add it to the `.gitignore` file. This way, access to the information needed to launch the web application will be easy.

### Start the poral
```yarn dev
```

### Technical choices:
The web application is developed in `NextJS`, it handles the tooling and configuration needed for React, and provides routing and additional structure, features, and optimizations for the application. and which subsequently allows to focus on the application domain.

The communication with the API is done using the Apollo client: `@apollo/client`. and it can be used to manage state, cache, and modify application data, all while automatically updating your UI.

`code-gen`: A library that ensures full typing between API and web application. Based on a simple `codegen.yml` configuration file, the library imports the schemas (based on resolvers) of our API and allows to generate the necessary hooks.

### How to use code gen library:
- On `/api`: Add a new resolver (called series.ts for example) to the API with the appropriate queries
- On `/web`: Add your the new query under `web/src/graphql/queries`
- On `/web`: Run `yarn gen` and check `/web/src/generated.graphql` the results
- Now you can import your new hook from `@/generated/graphql` and use it to fetch data from the API.
- Bonus: Once the data is fetched using the generated hook, you will see that the result is strongly typed and it allows direct access to the different fields exposed by the query


### Folder structure
The code is structured in the form of modules, to guarantee independence between the different sections:

- `src/pages/_app`: Entrypoint file which contains the different providers and the layout of the application

- `src/pages`: With NextJS, the routing system is managed by the naming of the folders/files that are under src/pages
- `src/pages/movies`: The folder allows to access the search pages (http://localhost:3000/movies/search?name=denz) and the details of a movie (ie: http://localhost:3000/movies/${id}).
- `src/pages/series`: In the same way, you can access the pages that display the series**

- `src/shared/components/Layout`: Wrapper that contains the Header and Footer
- `src/graphql`: Contains the list of queries/mutations/fragments linked to our graphql API
- `src/shared`: Contains dumb components that can be reused by pages


*: For the simplicity of the test we will focus only on the development mode on the front and back side.
**: For the simplicity of the test, I focused only on the movies section with its search and detail.
