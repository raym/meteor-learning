http://git-scm.com/downloads

```bash
~ $ git --version
~ $ cd ~/src
src $ git clone https://github.com/meteor/meteor.git
src $ cd meteor
meteor $ git co devel # switch to devel branch
meteor $ git co shark # switch to shark branch
meteor $ git co master # back to master branch
meteor $ cd ~/src/.../02
02 $ meteor create code
02 $ cd code
code $ meteor update # latest version
code $ meteor update --release 0.9.2-rc0 # specific release
code $ cd ~/src/meteor
meteor $ git checkout shark # switch to shark branch
meteor $ cd ~/src/.../02/code
code $ ~/src/meteor/meteor # running project against meteor shark branch
code $ echo alias="devmeteor=~/src/meteor/meteor" >> ~/.bashrc
code $ . ~/.bashrc
code $ devmeteor
```
