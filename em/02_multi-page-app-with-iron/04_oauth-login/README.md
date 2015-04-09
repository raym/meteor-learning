```sh
04 $ cd todos
todos $ iron search ^accounts
todos $ iron add accounts-meteor-developer
todos $ iron add accounts-ui
// follow instructions at http://docs.meteor.com/#/full/meteor_loginwithexternalservice
todos $ iron add service-configuration
todos $ iron mongo
```
```js
// mongo shell
show collections
db.meteor_accounts_loginServiceConfiguration.find().pretty()
db.users.find().pretty()
```
