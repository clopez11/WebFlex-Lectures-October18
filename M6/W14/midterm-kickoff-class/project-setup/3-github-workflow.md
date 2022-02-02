# GitHub Workflow

### **branch:** `master`
1. `git pull` to get all the files from `master` remote branch.
2. `git checkout -b <branchName>` to create new branch.
* example: `git checkout -b feature-routes-users`
* creating new branch will automatically switch to that branch name & copy your local `master` branch.

### **branch:** `feature-routes-users`
1. Code and do your work...
2. `git add .` to commit all files you worked on or `git add <fileName>` to commit specific file.
4. `git commit -m add endpoint for all users` to commit changes.
5. `git push origin feature-routes-users` to push to `feature-routes-users` repository.
6. `git checkout master` to go back to `master` branch.

---

### **branch:** `master`
1. `git pull` to get all the files from `master` remote branch.
2. fix conflicts, if any.
3. `git merge feature-routes-users` to merge `feature-routes-users` to local `master` repository.
4. `git push` to upload all the work done to `master` repository.

---

### Tips:
* **NEVER CODE ON MAIN / MASTER BRANCH**
* `git pull` to get all the latest updates from remote before you start working on project.
* Don't make one big commit. Make frequent commits at each steps.
* Communicate with team if there is a merge conflict.

---

### Links:
* https://guides.github.com
* https://gist.github.com/donburks/a5c1aae6de7d1504e631
