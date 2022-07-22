#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
#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
git push -f git@github.com:kensoz/blog.git gh-pages

cd -