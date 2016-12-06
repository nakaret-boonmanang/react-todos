## Redux Todo App

This project was implemented by using react-redux

Supported Requirements:

* All TODO task list show on the home page.
* User can add the new TODO task.
* User can view the task detail (task id, title, description, date)
* User can update their task detail
* User can mark their task done
* User can remove their tasks
* Persistent Data
* User can filter their tasks by all, active and completed
* Deployable 

## Installing a Dependency

The Redux Todo App project includes react, react-dom, redux, redux-persist react-time as dependencies.
You must install these dependencies first with `npm`:

```
npm install
```

When all dependencies ready in your directory. 
You can run the Todo App in development mode by below command.

```
npm start
```

If you want to run the Todo App like on production.
You have to run below command one by one.

```
npm run build
npm install -g pushstate-server
pushstate-server build
start http://localhost:9000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

