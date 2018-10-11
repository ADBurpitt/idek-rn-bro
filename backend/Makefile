.PHONY : deps clean build watch

deps:
	go get -u ./...

clean: 
	rm -rf ./hello-world/hello-world

build:
	./build.sh

watch:
	while true; do \
		make build; \
		inotifywait -qr .; \
	done
