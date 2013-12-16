all:
	r.js -o tools/build-script.js
	r.js -o tools/build-style.js

install:
	npm install -g r.js
	npm install --production

update:
	npm update --production

deploy:
	git push ec2 master