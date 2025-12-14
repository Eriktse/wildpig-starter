FROM alpine:latest
WORKDIR /app
RUN apk add --no-cache libstdc++ libgcc
COPY ./dist ./
CMD ["sh", "-c", "cd /app && ./wildpig"]
