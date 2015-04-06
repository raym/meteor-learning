http://git-scm.com/downloads

```sh
~ $ git --version
~ $ cd ~/src
src $ git clone https://github.com/meteor/meteor.git
src $ cd meteor
meteor $ git co devel # switch to devel branch
meteor $ git co shark # switch to shark branch
meteor $ git co master # back to master branch
meteor $ cd ~/src/.../02
02 $ meteor create test
02 $ cd test
test $ meteor update # latest version
test $ meteor update --release 0.9.2-rc0 # specific release
test $ cd ~/src/meteor
meteor $ git checkout shark # switch to shark branch
meteor $ cd ~/src/.../02/test
test $ ~/src/meteor/meteor # running project against meteor shark branch
test $ echo alias="devmeteor=~/src/meteor/meteor" >> ~/.bashrc
test $ . ~/.bashrc
test $ devmeteor
```
