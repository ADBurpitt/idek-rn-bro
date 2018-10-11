.PHONY: deps clean build

deps:
	go get -u ./...

clean: 
	rm -rf ./hello-world/hello-world
	
build:
	GOOS=linux GOARCH=amd64 go build -o hello-world/main ./hello-world

watch:
	while true; do \
		make build; \
		inotifywait -qr .; \
	done
