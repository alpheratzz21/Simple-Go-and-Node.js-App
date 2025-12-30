# Build Stage
FROM golang:1.22-alpine AS builder

WORKDIR /app

COPY go.mod .
RUN go.mod download

COPY . .
RUN go build -o app

# Runtime Stage
FROM alpine:3.19

WORKDIR /app
COPY --from=builder /app/app .

EXPOSE 8000

CMD ["./app"]