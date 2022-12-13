---
lang: ja-JP
title: コミットID修正
---

# Githubの歴史コミットのユーザ名とメールアドレスを変更する方法

![](https://img.shields.io/badge/-Git-9ca3af.svg?logo=git&style=popout-square)  ![](https://img.shields.io/badge/-Github-9ca3af.svg?logo=github&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/b1f92b75ff0446ec6ed1)


## 環境

+ Window 10
+ Git Bash



## 確認（ローカル）

まずは歴史記録を確認します  
間違ったのは`wrongName`と`wrongMail@example.com`です

```bash
git log --pretty=full

commit 000111000111000111000 (HEAD -> master, origin/master)
Author: wrongName <wrongMail@example.com>
Commit: wrongName <wrongMail@example.com>
```

### 

## 変更方法（ローカル）

正しいユーザー名を設定します

```bash
newName=correctName
```

正しいメールアドレスを設定します

```bash
newEmail=correctMail@example.com
```

ローカルのGit情報を変更します

```bash
git filter-branch -f --env-filter "GIT_AUTHOR_NAME='$newName'; GIT_AUTHOR_EMAIL='$newEmail'; GIT_COMMITTER_NAME='$newName'; GIT_COMMITTER_EMAIL='$newEmail';" HEAD
```

歴史記録を再確認して、正しいユーザー名とメールアドレスになりました

```bash
git log --pretty=full

commit 000111000111000111000 (HEAD -> master, origin/master)
Author: correctName <correctMail@example.com>
Commit: correctName <correctMail@example.com>
```



## 変更方法（GitHub）

ローカルで修正した情報をGithubに強制的にpushします

```bash
git push -f
```

