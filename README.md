# NestJS Webhook

- path swagger
```
/swagger
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