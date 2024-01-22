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

- Create More Components & use it

        ng g c login

        ng g c signup

        ng g c about

- For skip files generation normally 4-files are created but if we use this command then 2-files are generated

                ng generate component services --inline-template --skip-tests

- Include it in app.component.html file

                <app-services></app-services>

- Create housing-location component & call it

- Binds data with housingLocation

                <app-housing-location
                        [housingLocation]="housingLocation"
                ></app-housing-location>

- Add Dynamic values to data in housing Location Component

        <section class="listing">
                <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
                <h2 class="listing-heading">{{ housingLocation.name }}</h2>
                <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
        </section>

#### Looop Through Data

- Use \*ngFor to loop through data

                <app-housing-location
                        *ngFor="let housingLocation of housingLocationList"
                        [housingLocation]="housingLocation">
                </app-housing-location>

- It Displays all Cards like list

#### Learn how to integrate API

- create an interface

        export interface Comment {
                postId: number;
                id: number;
                name: string;
                email: string;
                body: string;
        }

- create service

        ng g s comment

- import HttpClientModule in app.module.ts from @angular/common/http

        import { HttpClientModule } from '@angular/common/http';

- create comment-list component

        ng generate component comment-list

#### Create service

- Add Static Data to the new service

        ng g service housing

- Inject the new service into HomeComponent

- In this, you added an Angular service to your app and injected it into the HomeComponent class.

### Create new Angular JS Project : serviceapp

- For Understanding services in Angular JS

- How to use services for better data handling inside application

- In different-different component we use static data in there .ts file & loop through it using \*ngFor loop

        <ul *ngFor="let artist of artists">
                <li>
                        {{artist.name}} who is currently number {{artist.grade}}
                </li>
        </ul>

- Define data in every component for using it

- The DRY Principle and Focus Areas

#### Creating the Service

- To create a service in Angular, you need to run the generate service command:

        ng generate service data

- Two new files will be created. Navigate to the data service.ts file, and make sure the content is the same as this:

        import { Injectable } from '@angular/core';
                @Injectable({
                providedIn: 'root'
                })
                export class DataService {
                constructor() { }
                getList(){
                return[
                {'grade':1, 'name':'Davido', 'country':'Nigeria'},
                {'grade':2, 'name':'Burna Boy', 'country':'Nigeria'},
                {'grade':3, 'name':'Diamondz Platinum', 'country':'Tanzania'},
                {'grade':4, 'name':'Sarkodie', 'country':'Ghana'},
                {'grade':5, 'name':'Mr. Eazi', 'country':'Nigeria'}
                ];
                }
        }

- This data service has now been created and hard-coded data stored in the getList function

- Register a Service inside providers

        @NgModule({
                declarations: [
                AppComponent,
                ArtistsComponent,
                ArtistnamesComponent
                ],
                imports: [
                BrowserModule
                ],
                providers: [DataService],
        bootstrap: [AppComponent]
        })

- Using the Services

        export class ArtistsComponent implements OnInit {
                public artists = []
                constructor(private list: DataService) { }
                ngOnInit(): void {
                this.artists = this.list.getList();
                }
        }

- You can see how this is done and now we have access to the functions declared inside of the service we created

- In Both component we use this service

        export class ArtistnameComponent implements OnInit {
                public artists = [];
                constructor(private list: DataService) {}
                ngOnInit(): void {
                this.artists = this.list.getList();
                }
        }

- Use services for better data handling

### Add Routing

- The Angular Router enables users to declare routes and specify which component should be displayed on the screen if that route is requested by the application.

- Creates details Component

        ng g c details

- Create routes.ts file inside src/app

- Inside main.ts

- Import the routes file and the provideRouter function:

                import { provideRouter } from '@angular/router';
                import routeConfig from './app/routes';

#### Routing in Angular JS Application

- Creates new project

        ng new angular-router-sample

- creates components

        ng generate component crisis-list

        ng generate component heroes-list

#### Defines Routes

- The route /crisis-center opens the crisis-center component.

- The route /heroes-list opens the heroes-list component.

- Create Page-Not-Found component

### CRUD App : Registration Application

- Create registration app

        ng new registrationapp

- Use Bootstrap library for UI creation

        npm i bootstrap

- Include boostrap file in style.css not in angular.json

- If we put bootstrap inside angular.json file we need to explicitly re run the application (basically angular.json compiles only one time when it serve using ng serve)

- We incldue it in style.css file

        @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

- Use bootstrap in UI

        <button class='btn btn-success'>Success </button>

### Create new Angular App

- Use routing in this app

        ng new angular-app

- Create Home component

        ng g c Home

- It will create the four files

#### Components

- Basic Components:

        ng g c name

- Components Inline style:

        ng g c name --inline-style

- Components Inline Template:

        ng g c name --inline-template

- Stand Alone Component:

        ng g c name -standalone

- Style component Inline

        @Component({
                selector: 'app-status',
                template: `
                <p>
                status works!
                </p>
                `,
                styles: [
                "p{color:green;font-size:2vw}"
                ]
        })
