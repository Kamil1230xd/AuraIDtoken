#!/usr/bin/env bash
set -euo pipefail
# Simple deploy script for Ubuntu VPS
# Usage: copy project to server, edit .env, then run ./deploy.sh

if [ ! -f .env ]; then
  echo ".env not found. Copy .env.example to .env and edit values."
  exit 1
fi

# create docker network and volumes
docker volume create traefik_letsencrypt || true

# start services
docker compose up -d --build

echo "Deployment triggered. Check containers with: docker compose ps"
echo "Traefik dashboard: http://<server-ip>:8080 (secure this in production)"
