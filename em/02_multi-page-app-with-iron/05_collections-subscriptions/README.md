```sh
05 $ cd todos
todos $ iron list
todos $ iron remove autopublish
todos $ iron remove insecure
todos $ iron list
todos $ iron g
todos $ iron generator
todos $ iron g:collection todos
```
```js
// webdev console
Todos
Todos.find().fetch()
Todos.insert({userId: Meteor.userId(), createdAt: new Date, isDone: false, subject: 'First Todo'})
Todos.find().fetch()
```
```sh
todos $ iron g:publish todos
```
