for f in */ ; do
  echo "go build -o ${f}main ./$f"
  GOOS=linux GOARCH=amd64 go build -o ${f}main ./$f
done