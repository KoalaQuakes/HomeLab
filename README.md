# DevOps Homelab

This repository documents a self-hosted homelab designed to simulate
a small production environment with emphasis on:
- Infrastructure as Code
- Secure-by-default configuration
- CI/CD automation
- Observability and operational resilience

The lab mirrors patterns used in real-world SaaS and internal platform teams.


## Architecture

- Proxmox hypervisor running on local hardware
- Kubernetes (k8s) cluster with 3 nodes
- Terraform-managed infrastructure
- GitHub Actions for CI/CD - close to code, fast to iterate.
- Prometheus + Grafana for monitoring
- Loki for log aggregation


## Security

- Secrets stored in Kubernetes secrets (never committed)
- RBAC enabled with least-privilege access
- Network policies restrict pod-to-pod communication
- Container images scanned during CI
- Regular dependency updates via automation

TODO:
TLS
mTLS
cert-manager
audit logging


## Skills Demonstrated

- Infrastructure as Code and reproducibility
- Kubernetes administration
- CI/CD pipeline design
- Secure system configuration
- Monitoring, alerting, and incident readiness
- End-to-end system ownership
