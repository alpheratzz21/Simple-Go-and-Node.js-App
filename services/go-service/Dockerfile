FROM golang:1.22-alpine AS builder

WORKDIR /app

COPY go.mod ./
RUN go.mod download || true

COPY . .
RUN go build -o app

CMD ["./app"]