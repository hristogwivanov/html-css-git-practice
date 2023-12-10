rem while(1) {cls; ls -Name; sleep 2;}
rem @echo off
mkdir "git-exercise"
cd git-exercise
REM 1. Basic Commands
mkdir "01. Basic Commands"
cd "01. Basic Commands"
call :SetupRepos
echo Robb > names.txt
echo. >> names.txt
echo Jon >> names.txt
echo. >> names.txt
echo Sansa >> names.txt
git add names.txt
git commit -m "Commit A: Added the names file"
git push origin

cd ../..
REM 10. Basic Cherry Pick
mkdir "13. Cherry Pick"
cd "13. Cherry Pick"
call :SetupRepos
echo Robb > names.txt
echo. >> names.txt
echo Jon >> names.txt
echo. >> names.txt
echo Sansa >> names.txt
git add names.txt
git commit -m "Commit A: Added the names file"
echo This is a lovely sentence > sentence.txt
git add sentence.txt
git commit -m "Commit B: Added the sentence file"
echo This is another delicous sentence >> other_sentence.txt
git add other_sentence.txt
git commit -m "Commit C: Added the additional other_sentence file"
echo Drogon > animals.txt
echo. >> animals.txt
echo Rhaegal > animals.txt
echo. >> animals.txt
echo Viserion > animals.txt
echo. >> animals.txt
git add animals.txt
git commit -m "Commit D: Added the animals file"
git branch feature
git checkout feature

echo 42 >> numbers.txt
git add numbers.txt
git commit -m "Commit E: Added the answers file"

echo Arya >> names.txt
echo. >> names.txt
echo Bran >> names.txt
echo. >> names.txt
echo Rickon >> names.txt
echo. >> names.txt
git add names.txt
git commit -m "Commit F: Updated and added more names to the file"

echo Finally I think this is probably the last sentence to add >> sentence.txt
git add sentence.txt
git commit -m "Commit G: Updated the original sentence file"
echo Boring extra file for no reason > boring.txt
git add boring.txt
git commit -m "Commit H: Added the boring file"
git checkout master

REM 9. Advanced interactive rebase
cd ../..
mkdir "12. Advanced rebase"
cd "12. Advanced rebase"
call :SetupRepos
git tag v0.0
git push origin v0.0
echo Hello > hello.code
git add hello.code
git commit -m "Helo Volrd feature"
echo HelloWrld? > hello.code
echo Unrelated stuff! > other.code
git add -A
git commit -am "Finished HW feature"
echo Hello World! > hello.code
git commit -am "Really made the thingy done"
echo println DEBUG >> hello.code
git commit -am "debugging"
echo 4321pass > private.secret
git add private.secret
git commit -m "important secret"
echo # THE Hello World program > README.md
git add README.md
git commit -m "Add doc - step 1"
echo # THE Ultimate Hello World program > README.md
git commit -am "Add doc - step 2"
echo.>> README.md
echo This program does exactly what it says >> README.md
git commit -am "Add doc - step 3"
echo does_it_work(hello.code) > hello.test
git add hello.test
git commit -m "Test for feature hello world"
echo does_it_work(hello.code); > hello.test
git commit -am "I forgot a semicolon"
REM 8. autosquash
cd ../..
mkdir "11. AutoSquash"
cd "11. AutoSquash"
call :SetupRepos
git tag v0.0
echo Hello World! > hello.code
git add hello.code
git commit -m "Hello World feature"
echo # THE Ultimate Helo Wrld program > README.md
echo.>> README.md
echo This program does exactly what it says >> README.md
git add README.md
git commit -m "Add documentation"
echo Unrelated stuff! > unrelated.stuff.code
git add unrelated.stuff.code
git commit -m "Add Unrelated stuff feature"
echo does_it_work(hello.code); > hello.test
git add hello.test
git commit -m "Test for feature hello world"
REM 7. Reordering History
cd ../..
mkdir "10. Reordering History"
cd "10. Reordering History"
call :SetupRepos
git tag -m 'Start' START
git push origin START
echo 1 > file1
git add file1
git commit -m "file1"
echo 1-fix > file1
git add file1
git commit -m "fix file1"
echo 9 > file9
git add file9
git commit -m "fike9"
echo 8 > file8
git add file8
git commit -m "file8"
echo 3 > file3
git add file3
git commit -m "file3"
echo 4 > file4
git add file4
git commit -m "add file4"
del file3
git add .
git commit -m "delete file3"
echo 5 > file5
git add file5
git commit -m "file5"
echo 2 > file2
git add file2
git commit -m "file2"
echo 6 > file6
git add file6
git commit -m "file6"
echo 7 > file7
git add file7
git commit -m "file7"
REM 6. RESTORING FILES
cd ../..
mkdir "09. Restoring Files"
cd "09. Restoring Files"
call :SetupRepos
echo the original foo > foo.txt
git add foo.txt
git commit -m "Add foo.txt"
git tag v1.0.0
echo bar > bar.txt
git add bar.txt
git commit -m "Add bar.txt"
echo foo > foo.txt
git add foo.txt
git commit -m "Update foo.txt"
echo FIXME: DONT COMMIT > bar.txt
git add bar.txt
del foo.txt
REM 4. Basic Revert
cd ../..
mkdir "07. Basic Revert"
cd "07. Basic Revert"
call :SetupRepos
echo Hello > greeting.txt
git add greeting.txt
git commit -m "Add file greeting.txt"
echo supersecretpassword > credentials.txt
git add credentials.txt
git commit -m "Add credentials to repository"
echo Original file content > greeting.txt
git add greeting.txt
git commit -m "Add content to greeting.txt"
echo This should have been appended to the original content, rather than overwriting it. > greeting.txt
git add greeting.txt
git commit -m "Overwrite greeting.txt"
REM 5.Reverted Merge
cd ../..
mkdir "08. Reverted Merge"
cd "08. Reverted Merge"
call :SetupRepos
echo library-1.2.3 > lib.txt
echo module using library-1.2.3 > mymodule.txt
git add lib.txt mymodule.txt
git commit -m"Adding module with its library"
git branch integrate-library-1.2.4
git checkout integrate-library-1.2.4
echo library-1.2.4 > lib.txt
echo New library functionality >> lib.txt
echo module using library-1.2.4 > mymodule.txt
git add lib.txt
git add mymodule.txt
git commit -m"Update to library version 1.2.4"
echo Use new library functionality >> mymodule.txt
git add mymodule.txt
git commit -m"Use new functionality in mymodule"
git push --set-upstream origin integrate-library-1.2.4
git checkout master
echo Promising feature X >> mymodule.txt
git add mymodule.txt
git commit -m"Add feature X"
git merge integrate-library-1.2.4 --no-edit ||:
REM merge conflict
echo module using library-1.2.4 > mymodule.txt
echo Promising feature X >> mymodule.txt
echo Use new library functionality >> mymodule.txt
git add mymodule.txt
git commit -m"Merge integrate-library-1.2.4" --no-edit
echo Useful feature Y >> mymodule.txt
git add mymodule.txt
git commit -m"Add feature Y"
git push origin
REM 2.3-Way Merge
cd ../..
mkdir "05. 3-Way Merge"
cd "05. 3-Way Merge"
call :SetupRepos
echo Hello > greeting.txt
git add greeting.txt
git commit -m "add initial greeting"
git push
REM 3.Merge Conflict
cd ../..
mkdir "06. Merge Conflict"
cd "06. Merge Conflict"
call :SetupRepos
echo Hello > hello.txt
git add hello.txt
git commit -m "add a nice greeting"
git push
git checkout -b feature1
echo Really nice feature > feature.txt
git add .
git commit -m "add really nice feature in the project"
git push --set-upstream origin feature1
git checkout master
echo The best feature > feature.txt
git add .
git commit -m "add the best feature in the project"
git push
REM 1.Detached Head
cd ../..
mkdir "04. Detached Head"
cd "04. Detached Head"
call :SetupRepos
echo A > A.txt
git add .
git commit -m "A"
echo B > B.txt
git add .
git commit -m "B"
echo C > C.txt
git add .
git commit -m "C"
echo D > D.txt
git add .
git commit -m "D"
git push
REM Merge Repo
cd ../..
mkdir "merge"
cd merge
call :SetupRepos
git pull
git branch feature1
git checkout feature1
echo some feature one code > feature1.txt
git add .
git commit -m "F1-1-initial feature1 code"
git push --set-upstream origin feature1
git remote -v show origin
git log --oneline --graph --decorate --all
git checkout master
echo some feature two code > feature2.txt
git add .
git commit -m "M2-feature 2 directly on master"
git push
git remote -v show origin
git log --oneline --graph --decorate --all
git branch feature3
git checkout feature3
echo some feature three code > feature3.txt
git add .
git commit -m "F3-1-feature 3 code"
git push --set-upstream origin feature3
echo some feature two code >> feature2.txt
git add .
git commit -m "M3-more feature 2 directly on master"
git push
echo some new services >> services.txt
git add .
git commit -m "M4-new services on master"
git push
REM Rebase repo
cd ../..
mkdir "rebase"
cd rebase
call :SetupRepos
git branch features
git checkout features
echo some feature one code > feature1.txt
git add .
git commit -m "feature one code"
git push -u origin features
echo fixed feature one code >> feature1.txt
git add .
git commit -m "fix feature one code"
git push
echo some feature two code >> feature2.txt
git add .
git commit -m "add feature two"
git push
git checkout master
echo add new service > service.txt
git add .
git commit -m "add new service"
git push
REM branch Repo
cd ../..
mkdir "branch"
cd branch
call :SetupRepos
git branch feature1
git checkout feature1
echo some feature one code > feature1.txt
git add .
git commit -m "F1-1-initial feature1 code"
git push -u origin feature1
git branch feature2
git checkout feature2
echo some feature two code > feature2.txt
git add .
git commit -m "F2-1-initial feature2 code"
git push -u origin feature2
git checkout -b feature3
echo some feature three code > feature3.txt
git add .
git commit -m "F3-1-initial feature3 code"
git push -u origin feature3
git checkout master
echo new service > service.txt
git add service.txt
git commit -m "M2-add new service"
git push
git checkout feature1
echo fix feature one >> feature1.txt
git add .
git commit -m "fix feature one"
git push
git checkout feature2
echo fix feature two >> feature2.txt
git add .
git commit -m "fix feature two"
git push
git checkout master
EXIT /B %ERRORLEVEL%

REM Functions
:SetupRepos
git init --bare remote_repo.git
git clone remote_repo.git local_repo
cd local_repo
git remote -v show origin
type nul > README.md
git add .
git commit -m "initial commit"
git push origin
EXIT /B 0