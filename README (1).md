Aura-IDToken - Traefik + Docker package (DuckDNS edition)

This package is pre-configured for a DuckDNS subdomain: aura-idtoken.duckdns.org

Steps to run
1) Copy .env.example to .env and fill the DUCKDNS_TOKEN value (get it from https://www.duckdns.org)
   - cp .env.example .env
   - edit .env and replace DUCKDNS_TOKEN=your-token-here
2) Ensure Docker and Docker Compose are installed on your server.
3) Export .env into environment or use docker compose --env-file .env up -d
   - export $(cat .env | xargs)
   - docker compose up -d
4) Wait a minute or two; duckdns updater updates DNS, Traefik requests certs from Let's Encrypt and serves HTTPS.
5) Visit https://aura-idtoken.duckdns.org

Notes:
- Traefik uses TLS challenge; DuckDNS should point to your server public IP and the DUCKDNS token is required to keep the subdomain updated.
- If you run locally behind NAT, consider using ngrok or a VPS.
- Traefik dashboard is available on port 8080 (exposed) — secure it in production.
