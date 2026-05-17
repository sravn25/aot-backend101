# POST (create new tasks)
```bash
curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Learn"}'
```

# GET (tasks done)
```bash
curl "http://localhost:3000/tasks?done=false"
```

# PATCH (set task as done)
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
