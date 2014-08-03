git checkout gh-pages
git pull --rebase origin gh-pages
git rebase master 
git push origin gh-pages
git checkout master
