---
lang: ja-JP
title: commitID变更
---

# 变更Github上历史commit的用户名和邮箱的方法

![](https://img.shields.io/badge/-Git-9ca3af.svg?logo=git&style=popout-square)  ![](https://img.shields.io/badge/-Github-9ca3af.svg?logo=github&style=popout-square)



📡  [思否](https://segmentfault.com/a/1190000042339058) · [掘金](https://juejin.cn/post/7133086666012491784/)

## 环境

+ Window 10
+ Git Bash



## 先确认历史记录

错误的用户名是`wrongName`，邮箱是`wrongMail@example.com`

```bash
git log --pretty=full

commit 000111000111000111000 (HEAD -> master, origin/master)
Author: wrongName <wrongMail@example.com>
Commit: wrongName <wrongMail@example.com>
```



## 变更方法

设置正确的用户名

```bash
newName=correctName
```

设置正确的邮箱

```bash
newEmail=correctMail@example.com
```

修改本地git的提交信息

```bash
git filter-branch -f --env-filter "GIT_AUTHOR_NAME='$newName'; GIT_AUTHOR_EMAIL='$newEmail'; GIT_COMMITTER_NAME='$newName'; GIT_COMMITTER_EMAIL='$newEmail';" HEAD
```

再确认历史记录，发现已经被修改为正确的了

```bash
git log --pretty=full

commit 000111000111000111000 (HEAD -> master, origin/master)
Author: correctName <correctMail@example.com>
Commit: correctName <correctMail@example.com>
```



## GitHub

强行push，把刚才修改的提交到github

```bash
git push -f
```

