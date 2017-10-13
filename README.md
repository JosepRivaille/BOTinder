# BOTinder

First of all, we need Python3.5 installed on our computer and any package manager like apt-get or brew.

## Installation
```[bash]
sudo apt-get install python3-pip
pip3 install virtualenvwrapper
export WORKON_HOME=~/Envs
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3.5
source /usr/local/bin/virtualenvwrapper.sh
mkvirtualenv botinder
```

## Start environment 
```[bash]
workon botinder
pip3 install -r requirements.txt
```

## Leave environment
```[bash]
deactivate
```