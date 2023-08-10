# Star Wars API - Character List Script

This script fetches and prints all character names from a specific Star Wars movie using the Star Wars API.

## Requirements

- Editors: vi, vim, emacs
- Operating System: Ubuntu 20.04 LTS
- Node.js version: 10.14.x
- Code Style: Semistandard compliant (Rules of Standard + semicolons on top, as reference: AirBnB style)
- Files must end with a new line
- First line of files: `#!/usr/bin/node`
- `README.md` file at the root of the project folder
- All files must be executable
- File length will be tested using `wc`
- Do not use `var`

## More Info
### Install Node 10

   ```bash
   $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
   $ sudo apt-get install -y nodejs
   ```
Install semi-standard
Documentation

    ```bash
    $ sudo npm install semistandard --global
    ```

## Install request module and use it
### Documentation
 ```bash
$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules
```
## Task
Write a script that prints all characters of a Star Wars movie:

The first positional argument passed is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name per line in the same order as the “characters” list in the /films/ endpoint
You must use the Star wars API
You must use the request module

GitHub repository: alx-interview
Directory: 0x06-starwars_api
File: 0-starwars_characters.js
## Example
```bash
alexa@ubuntu:~/0x06$ ./0-starwars_characters.js 3
Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Palpatine
Boba Fett
Lando Calrissian
Ackbar
Mon Mothma
Arvel Crynyd
Wicket Systri Warrick
Nien Nunb
Bib Fortuna
alexa@ubuntu:~/0x06$
```
 