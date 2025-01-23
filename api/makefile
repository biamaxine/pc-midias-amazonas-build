API:= ../../api

all: clear copy

clear:
	if [ -d /dist ]; then rm -rf /dist; fi
	if [ -d /prisma ]; then rm -rf /prisma; fi
	if [ -d /fonts ]; then rm -rf /fonts; fi

	if [ -f package.json ]; then rm package.json; fi
	if [ -f yarn.lock ]; then rm yarn.lock; fi
	if [ -f policiacivil.key ]; then rm policiacivil.key; fi
	if [ -f policiacivil.crt ]; then rm policiacivil.crt; fi
	if [ -f .env.example ]; then rm .env.example; fi

copy:
	cp -rf $(API)/dist $(API)/prisma $(API)/fonts .
	cp  $(API)/package.json \
		 	$(API)/yarn.lock \
			$(API)/policiacivil.key \
			$(API)/policiacivil.crt \
			$(API)/.env.example \
 			.

init_prisma:
	yarn install --prod
	yarn add prisma
	yarn prisma generate
	yarn prisma migrate deploy