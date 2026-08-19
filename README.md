# meeraaccademy

<!-- [![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-bbvmwwvw) -->

## GitHub to Vercel deployment

This project includes a GitHub Actions workflow at `.github/workflows/vercel.yml`.

Set this repository secret in GitHub before running it:

- `VERCEL_TOKEN`

The workflow creates preview deployments for pull requests and production deployments for pushes to `main` or `master`. It can also be triggered manually from the GitHub Actions tab.
echo "# meeraaccadamy" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/data-infolenz/meeraaccadamy.git
git push -u origin main