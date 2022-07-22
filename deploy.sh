#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
#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
git push -f git@study.github.com:kensoz/blog.git master:gh-pages

cd -