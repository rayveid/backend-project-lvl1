install: # разворачивание и запуск
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run