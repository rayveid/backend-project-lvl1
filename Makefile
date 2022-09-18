install: # разворачивание и запуск
	npm ci $(PKG)

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: # запуск линтера
	npx eslint