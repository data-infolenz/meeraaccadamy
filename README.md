# meeraaccademy

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-bbvmwwvw)

## GitHub to Vercel deployment

This project includes a GitHub Actions workflow at `.github/workflows/vercel.yml`.

Set these repository secrets in GitHub before running it:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

The workflow creates preview deployments for pull requests and production deployments for pushes to `main` or `master`. It can also be triggered manually from the GitHub Actions tab.
