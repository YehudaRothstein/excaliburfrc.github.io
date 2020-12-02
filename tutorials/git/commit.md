---
permalink: /tutorials/git/commit.html
layout: tutorial
---
Commits can be thought of as points in the history of the repository, or groups of changes.
Each commit should be given a meaningful name that sums up the changes in that commit.
Please avoid situations like this:

![xkcd](https://imgs.xkcd.com/comics/git_commit.png)

Before creating the commit itself, you can choose what changes will be _`add`ed_ to the commit.

<div class="tab">
  <button class="tablinks" onclick="switchTo(event, 'cmd-commit')">Terminal</button>
  <button style="" class="tablinks" onclick="switchTo(event, 'ij-commit')">IntelliJ</button>
  <button style="" class="tablinks" onclick="switchTo(event, 'ghd-commit')">GitHub Desktop</button>
</div>

<details id="cmd-commit">

To add files and changes, use `git add`:
```ps
git add file1 file2 file3
```
> The `*` wildcard can be used to replace any amount of characters:
`git add *.java` will add all Java files in the project. 

To create a commit, use `git commit`:
```ps
git commit -m "message"
```

</details>
<details id="ghd-commit">

Use the checkboxes on the left to select the files to add.
Write the commit message at the bottom, and press `Commit`.

[](img/ghd-commit.png)

</details>
<details id="ij-commit">

> In IntelliJ 2020.3 and later, there are two git interfaces. 
You can switch between the two by checking `Version Control > Commit > Use non-modal commit interface`
and `Version Control > Git > Enable staging area` in the settings.

Click the green checkmark at the top-right.

A window (the modal commit interface), or a panel on the left (the non-modal commit interface) should open.
Select the files and changes to commit with the checkboxes (staging area disabled), or by moving
changes to the `Staged` list with the `+` and `-` (staging area enabled - changes in `Staged` will be committed).

In both, you can double-click a file name to see the changes. 

Write the commit message and press `Commit`.

</details>

<br/>