## Description

For implementation of this module, I decided to use a modern promising approach with SSR + Next. From the description of the test task, I realized that data requesting and html generation can be performed on the server side to avoid unnecessary load on the user's device and also optimize the page loading speed. 
Also because this application is related to images. Next provides a powerful tool for managing image uploads right out of the box (Image comp from next/image lib). For example, in this test task, images will be loaded only when the user scrolled down the screen. Images that the user does not see will not be uploaded. It also increases the site's loading speed and the user experience.
I also used the feature built into Next to generate a static page for each individual image page (SSG), also to optimize the download speed.
I decided to apply some tactical DDD design techniques + DI (an architectural foundation in case the project starts to grow), for example, using the repository pattern, creating domain classes, applying DTOs, created a separate service for working with phots and encapsulated all the logic of working with photos in the bounded context.
Also, for integration testing purposes, it would be nice to create a test server with photos where I could change data on the fly. It may also be worth making a more beautiful description for errors and thinking about how to beautifully show them to the user. It would also be cool to add pre-commit/push hooks to run tests before uploading changes to the Git repository.

## Start project

First, you need to install dependencies

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

## Test project

Run unit tests

```bash
npm run test
```

Run e2e tests (before launching the integration test, the application must be running on the localhost:3000)

```bash
npm run cypress:run
```
