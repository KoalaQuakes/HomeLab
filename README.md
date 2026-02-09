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


