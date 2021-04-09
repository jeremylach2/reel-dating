# Database Design
---

```json
{
    "users": {
        "1": {
            "username": "bwpikaard",
            "name": {
                "first": "Bryan",
                "last": "Pikaard"
            },
            "password": "js089fh439fh9348734hf8743hfg98-sad97fd8hwe89f73",
            "questionaire": [
                "answer to question 1",
                "answer to q2",
                "q3",
                "q4"
            ],
            "location": "24153",
            "notifications": true,
            "blocked_users": ["2"],
            "conversations": ["412"]
        }
    },
    "conversations": {
        "412": {
            "users": ["1", "2"],
            "messages": [
                {
                    "timestamp": "328473289437",
                    "user_id": "1",
                    "content": "Hi there!"
                }
            ]
        }
    }
}
```