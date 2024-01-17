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
