## CI/CD
TODO:
- Trigger conditions
- Build → test → deploy stages
- Rollback strategy

GitHub Actions pipeline performs:

1. Lint & validate Terraform
2. Build container images
3. Scan images for vulnerabilities
4. Deploy to Kubernetes via Helm
5. Run post-deployment smoke tests

Deployments use:
- GitOps-style versioned manifests
- Rolling updates
- Automatic rollback on failed health checks