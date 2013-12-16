all:
	r.js -o tools/build-script.js
	r.js -o tools/build-style.js

update:
	npm update --production