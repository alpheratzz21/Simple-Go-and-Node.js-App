# Simple Go and Node.js Monorepo Application

## Overview
This repository contains a simple monorepo setup with two backend services:
- **Go Service** – a basic HTTP server
- **Node.js Service** – a basic Express HTTP server

Both services are containerized, built via CI/CD, and prepared for deployment on Kubernetes.

---

## Repository Structure
```
.
├── services/
│ ├── go-service/
│ └── node-service/
├── k8s/
│ ├── go-deployment.yaml
│ ├── node-deployment.yaml
│ ├── services.yaml
│ └── ingress.yaml
├── .github/workflows/
│ └── ci.yml
└── README.md

```

---

## Services

### Go Service
- Port: `8000`
- Endpoints:
  - `/` – main endpoint
  - `/health` – health check

### Node.js Service
- Port: `3000`
- Endpoints:
  - `/` – main endpoint
  - `/health` – health check

---

## CI/CD Pipeline
This project uses **GitHub Actions** for CI/CD.

Workflow:
1. Triggered on push to the `main` branch
2. Build Docker images for:
   - Go service
   - Node.js service
3. Push container images to Docker Hub

This ensures reproducible builds and consistent container images.

---

## Kubernetes Deployment
Kubernetes manifests are provided for:
- Deployments
- Services
- Ingress (optional)

Apply all manifests:
```bash
kubectl apply -f k8s/

Accessing the Services
Local Kubernetes (Recommended for Testing)

Services can be accessed using port-forward:

kubectl port-forward svc/go-service 8000:8000
kubectl port-forward svc/node-service 3000:3000


Access:

Go Service: http://localhost:8000

Node Service: http://localhost:3000

Ingress manifests using xip.io are included to demonstrate public exposure via DNS. Actual ingress availability depends on the local Kubernetes environment.

Running Without Kubernetes

Run services directly using Docker:

docker run -p 8000:8000 <dockerhub-username>/go-service:latest
docker run -p 3000:3000 <dockerhub-username>/node-service:latest

Monitoring and Logging (Design)

Health checks via /health endpoints

Logs written to stdout

In production, metrics can be collected using Prometheus and visualized with Grafana

Notes

This project prioritizes clarity and simplicity.

Kubernetes manifests are provided as infrastructure-as-code, even if not fully deployed in all local environments.