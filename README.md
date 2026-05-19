# Route Handling

## POST (create new tasks)
```bash
curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Learn"}'
```

## GET (tasks done)
```bash
curl "http://localhost:3000/tasks?done=false"
```

## PATCH (set task as done)
```bash
  curl -X PATCH http://localhost:3000/tasks/1
```
Summary of the three ways to pass data to a route:

┌──────────────┬────────────────┬────────────────────────┐
│    Where     │ How to access  │        Example         │
├──────────────┼────────────────┼────────────────────────┤
│ URL segment  │ req.params.id  │ /tasks/3               │
├──────────────┼────────────────┼────────────────────────┤
│ Request body │ req.body.title │ POST with JSON payload │
├──────────────┼────────────────┼────────────────────────┤
│ Query string │ req.query.done │ /tasks?done=true       │
└──────────────┴────────────────┴────────────────────────┘

# Data Store
## Create
```bash
curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Learn Express"}'
```

## Mark done
```bash
curl -X PATCH http://localhost:3000/tasks/1 \
    -H "Content-Type: application/json" \
    -d '{"done": true}'
```

## Filter
```bash
curl "http://localhost:3000/tasks?done=true"
```

# Persistent storage
## Create a task
```bash
curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Learn MongoDB"}'
```

## Get all tasks
```bash
curl http://localhost:3000/tasks
```
## Use that _id to fetch a specific task
```bash
curl http://localhost:3000/tasks/`{id}`
```
