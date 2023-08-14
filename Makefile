.DEFAULT_GOAL := help
.PHONY := help build clean
HELP_COL_CMD := 10 # width of the help command column

MVN = shell which pnpm >/dev/null && echo pnpm || (echo you need pnpm for this project && exit 1) )

help: ## print this help
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-$(HELP_COL_CMD)s\033[0m %s\n", $$1, $$2}'

clean: ## clean all build artifacts (without incremental build extension)
	rm -rf .svelte-kit node_modules

install: ## install all dependencies
	pnpm i

dev: ## build only icon-socle-test, without checks/tests (useful during integration perco to download new catalogues)
	pnpm run tunnel &
	pnpm run dev

test: ## build everything with the default profiles
	pnpm test

build: ## build everything, without checks/tests (without incremental build extension)
	pnpm build


