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

- AngularJS numbers are like JavaScript numbers:

        <div ng-app="" ng-init="quantity=20;cost=12">

            <p>Total in dollar: {{ quantity * cost }}</p>

        </div>

- Using ng-init : we can create variables & use them in app

- Same example using ng-bind:

        <div ng-app="" ng-init="quantity=28;cost=7.6">

            <p>Total in dollar: <span ng-bind="quantity * cost"></span></p>

        </div>

#### AngularJS Strings

- AngularJS strings are like JavaScript strings:

        <div ng-app="" ng-init="firstName='John';lastName='Doe'">

            <p>The name is {{ firstName + " " + lastName }}</p>

        </div>

- Same example using ng-bind:

        <div ng-app="" ng-init="firstName='John';lastName='Doe'">

             <p>The name is <span ng-bind="firstName + ' ' + lastName"></span></p>

        </div>

#### AngularJS Objects

- AngularJS objects are like JavaScript objects:

        <div ng-app="" ng-init="person={firstName:'Lucky',lastName:'Kashyap'}">

            <p>The name is {{person.firstName}} {{ person.lastName }}</p>

        </div>

- Same example using ng-bind: (bind not work)

        <div ng-app="" ng-init="person={firstName:'John',lastName:'Doe'}">

            <p>The name is <span ng-bind="person.lastName"></span></p>

        </div>

#### AngularJS Arrays

- AngularJS arrays are like JavaScript arrays:

        <div ng-app="" ng-init="points=[1,15,19,2,40]">

            p>The third result is {{ points[2] }}</p>

        </div>

- Same example using ng-bind: (bind not working)

        <div ng-app="" ng-init="points=[1,15,19,2,40]">

            <p>The third result is <span ng-bind="points[2]"></span></p>

        </div>

- In case of Arrays & Objects ng-bind not work

- AngularJS Expressions vs. JavaScript Expressions

- Like JavaScript expressions, AngularJS expressions can contain literals, operators, and variables.

- Unlike JavaScript expressions, AngularJS expressions can be written inside HTML.

- AngularJS expressions do not support conditionals, loops, and exceptions, while JavaScript expressions do.

- AngularJS expressions support filters, while JavaScript expressions do not.

### AngularJS Applications

- AngularJS modules define AngularJS applications.

- AngularJS controllers control AngularJS applications.

- The ng-app directive defines the application, the ng-controller directive defines the controller.

                var app = angular.module("myApp", []);
                    app.controller("myCtrl", function ($scope) {
                        $scope.firstName = "Lucky";
                        $scope.lastName = "Kashyap";
                });

### Intialize First Angular JS App

- First check node version: It should be greater than 16

- Using CLI command

- Use angular 14 version

        npm -g @angular/cli@14

- create folder for angular JS Application

- Run this command

        ng new blog

- For running angular server

        ng serve

#### Interpolation

- Dynamic Data Display using {{}}

- In app.component.ts

- Define data (property & functions)

            export class AppComponent {
                title = 'blog';
                data = {
                    name: 'Lucky',
                    age: 22,
                    work: 'Developer',
                    locality: 'Jaipur',
                };
            }

- Use these properties inside app.component.html file

            <p{{title}}</p>
            <p>User Data: {{data.name}}, {{data.age}}, {{data.work}}, {{data.locality}}</p>

- we can use dynamic class names

              <p class="{{title}}">{{title}}</p>

              .blog {
                font-size: 3vw;
                background-color: crimson;
                color: peachpuff;
                padding: 1vw;
              }

- Define data inside app.component.ts

- What we cannot do with Interpolation

        <p>What we can not do with interpolation</p>

        <p>{{title='Change Title'}}</p>
        <p>{{typeof title}}</p>
        <p>{{data}}</p>
        <p>{{x++}}</p>
        <p>{{x--}}</p>
        <p>{{y++}} {{y--}}</p>

### Commands

- For help

        ng help

- Generating something

        ng generate

- create Module

        ng g m userauth/signin

- create Component

        ng g c register

- Creating class

        ng g class Dummy

- Creating Interface

        ng g interface dummyInterface

- For Building app

        ng build

#### Create Component & use IT

- use command to create component

        ng generate component login

        ng generate c signup

        ng g c home

- Use home component via home.component.ts

- Take selector name from it & use it in app.component.html file

        <app-home></app-home>
