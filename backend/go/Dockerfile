FROM golang:alpine

RUN mkdir /app

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download
COPY . .

RUN go get github.com/Aman-Codes/backend/go

EXPOSE 8080

ENTRYPOINT BackendGo --build="go build main.go" --command=./main