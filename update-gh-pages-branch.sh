# This runs after grunt build
git add -A
git commit -m 'New build'
git checkout gh-pages
git reset --hard
git clean -f
git pull --rebase origin gh-pages
git rebase master
git push origin gh-pages
git checkout master
