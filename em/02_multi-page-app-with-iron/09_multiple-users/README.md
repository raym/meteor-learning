```sh
09 $ cd todos
todos $ iron g:route '/users/:_id'
todos $ rm -rf app/client/templates/\:_id/
todos $ rm app/lib/controllers/:_id_controller.js
todos $ iron g:controller users
todos $ iron g:template users/users_list
todos $ iron g:template users/users_detail
todos $ iron g:publish users
todos $ iron g:publish user
```
