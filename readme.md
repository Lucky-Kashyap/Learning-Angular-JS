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

- we can use data-ng-, instead of ng-, if you want to make your page HTML valid.

        <div data-ng-app="" data-ng-init="firstName='John'">

            <p>The name is <span data-ng-bind="firstName"></span></p>

        </div>

#### Angular JS Expressions

- AngularJS expressions are written inside double braces: {{ expression }}.

- AngularJS will "output" data exactly where the expression is written:

        <div ng-app="">
            <p>My first expression: {{ 5 + 5 }}</p>

        </div>

- AngularJS expressions bind AngularJS data to HTML the same way as the ng-bind directive.

            <p>Name: <input type="text" ng-model="name"></p>

            <p>{{name}}</p>

- AngularJS binds data to HTML using Expressions.

- AngularJS expressions can also be written inside a directive: ng-bind="expression".

- AngularJS expressions are much like JavaScript expressions: They can contain literals, operators, and variables.

        {{ 5 + 5 }} or {{ firstName + " " + lastName }}



            <div ng-app="">
            <p>My first expression: {{ 5 + 5 }}</p>
            </div>

- If you remove the ng-app directive, HTML will display the expression as it is, without solving it

#### Let AngularJS change the value of CSS properties.

- Change the color of the input box below, by changing its value:

        <div ng-app="" ng-init="myCol='lightblue'">

        <input style="background-color:{{myCol}}" ng-model="myCol">

        </div>

### AngularJS Applications

- AngularJS modules define AngularJS applications.

- AngularJS controllers control AngularJS applications.

- The ng-app directive defines the application, the ng-controller directive defines the controller.

                var app = angular.module("myApp", []);
                    app.controller("myCtrl", function ($scope) {
                        $scope.firstName = "Lucky";
                        $scope.lastName = "Kashyap";
                });
