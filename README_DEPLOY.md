Aura-IDToken — Deployment package (Traefik + Docker + Next.js)

Files included:
- Dockerfile (Next.js production)
- docker-compose.yml (Traefik + app)
- traefik/dynamic.yml
- .env.example
- deploy.sh (server-side deploy script)
- .github/workflows/ci.yml (CI build on push)
- wallet-integration.tsx (example to add to Next.js dashboard)

How to use:
1. Copy this folder to your server (Ubuntu recommended).
2. Create .env from .env.example and fill DUCKDNS_TOKEN.
3. Run: ./deploy.sh
4. Wait for Traefik to obtain certs and serve your app at https://$DOMAIN

Notes:
- Update DNS to point `DUCKDNS_SUBDOMAIN.duckdns.org` to your server IP (DuckDNS handles dynamic IP via token).
- Secure Traefik dashboard (port 8080) in production (basic-auth or firewall).
- To integrate TonConnect, install @tonconnect/ui-react and follow their docs.
