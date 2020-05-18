.PHONY:test	
test:
	@$(info testing started)
	node app.mjs
	@$(info testing finsihed)
	
.PHONY: all
all: test