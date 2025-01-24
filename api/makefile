API := ../../api

all: clear copy

clear:
	# Remove diretórios, se existirem
	if [ -d ./dist ]; then rm -rf ./dist; fi
	if [ -d ./prisma ]; then rm -rf ./prisma; fi
	if [ -d ./fonts ]; then rm -rf ./fonts; fi

	# Remove arquivos, se existirem
	rm -f package.json yarn.lock policiacivil.key policiacivil.crt .env.example

copy:
	# Copia diretórios do API
	cp -rf $(API)/dist $(API)/prisma $(API)/fonts .

	# Copia arquivos específicos do API
	cp $(API)/package.json \
	   $(API)/yarn.lock \
	   $(API)/policiacivil.key \
	   $(API)/policiacivil.crt \
	   $(API)/.env.example \
	   .
