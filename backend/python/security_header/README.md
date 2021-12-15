# Security Header Check

Run app.py as flask app

Send URL as POST data on `http://localhost:8000` just as below:

```
{"URL":"https://aman-codes.github.io"}
```

will give results as follows:

```
{
    "https://aman-codes.github.io": {
        "missing": [
            "X-Frame-Options",
            "X-Content-Type-Options",
            "Content-Security-Policy",
            "Referrer-Policy",
            "Expect-CT",
            "Cross-Origin-Embedder-Policy",
            "Cross-Origin-Resource-Policy",
            "Cross-Origin-Opener-Policy"
        ],
        "present": {
            "Permissions-Policy": "interest-cohort=()",
            "Strict-Transport-Security": "max-age=31556952"
        }
    },
    "information_disclosure": {
        "Server": "GitHub.com"
    }
}
```
