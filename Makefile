BIN = ./node_modules/.bin

.PHONY: start

start:
	@$(BIN)/nodemon ./index.js
