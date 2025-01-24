APP := ../../app

all: clear copy

clear:
	if [ -d ./dist ]; then rm -rf ./dist; fi

copy:
	if [ ! -d ./dist ]; then mkdir ./dist; fi
	cp -rf $(APP)/dist/pc-midias-project/browser/* ./dist/
	if [ -f ./dist/index.html ]; then cp ./dist/index.html ./dist/404.html; fi
