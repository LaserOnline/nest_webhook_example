# NestJS Webhook

- run project
```
docker compose up --build
```

- down project
```
docker compose down -v
```

- path swagger
```
/swagger
```

- web test webhook show data
```
http://localhost:80
```

- package webhook
```
npm install @nestjs/platform-express
```

- Webhook Path

```
http://localhost:3000/webhook/send
```

- request body json
```
{
    "message": "helloworld"
}
```

```
http://localhost:3000/webhook/data
```
