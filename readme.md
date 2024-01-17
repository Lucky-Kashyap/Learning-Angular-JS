### Start Learning Angular JS

#### Start With CDN links

- include Angular JS via CDN
- Use it
- Basic Angular JS Program
- Via CDN

            <!DOCTYPE html>
            <html lang="en-US">
            <head>
                <title>Learning Angular JS</title>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
            </head>
            <body>
                <div ng-app="">
                <p>Name : <input type="text" ng-model="name" /></p>
                <h1>Hello {{name}}</h1>
                </div>
            </body>
            </html>

- ng-app : directive defines an Angular JS Application

- ng-model :directive binds the value of HTMl controls (input,select,textarea) to application data

- ng-bind : directive binds application data to the HTML view.

#### Directives

-AngularJS starts automatically when the web page has loaded.

- The ng-app directive tells AngularJS that the <div> element is the "owner" of an AngularJS application.

- The ng-model directive binds the value of the input field to the application variable name.

- The ng-bind directive binds the content of the <p> element to the application variable name

- As you have already seen, AngularJS directives are HTML attributes with an ng prefix.

- The ng-init directive initializes AngularJS application variables.
