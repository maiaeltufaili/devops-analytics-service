
```markdown
# DevOps Analytics Service

A containerized Node.js analytics microservice featuring a fully automated CI/CD pipeline, automated testing, container orchestration via Docker Compose, and automated cloud deployment to AWS EC2.

---

## Tech Stack & Infrastructure

* Runtime: Node.js, Express
* Testing: Jest
* Containerization: Docker, Docker Compose, Docker Hub
* CI/CD Orchestration: GitHub Actions
* Cloud Infrastructure: AWS EC2 (Ubuntu)

---

## Architecture & CI/CD Pipeline

The project uses a two-stage GitHub Actions workflow triggered on pushes and pull requests to the `main` branch:

1. **Test and Build (`test-and-build`):**
   * Checks out the repository and sets up the Node.js environment.
   * Installs dependencies (`npm ci`) and runs automated Jest test suites.
   * Logs into Docker Hub securely using GitHub Secrets.
   * Builds the multi-platform Docker image and pushes the latest tag to Docker Hub.

2. **Deploy (`deploy`):**
   * Automatically connects to the AWS EC2 instance securely via SSH.
   * Ensures Docker and Docker Compose are installed on the target environment.
   * Pulls the latest repository updates from GitHub.
   * Tears down older containers (`docker compose down`), pulls the updated images from Docker Hub, and spins up the live service stack (`docker compose up -d --build`).

---

## Project Structure

```text
devops-analytics-service/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD pipeline configuration
├── src/                    # Application source code
├── tests/                  # Automated test suites (Jest)
├── Dockerfile              # Container build instructions
├── docker-compose.yml      # Multi-container orchestration setup
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation

```

---

## Local Development & Setup

If you want to run or test the service locally:

1. **Clone the repository:**
```bash
git clone [https://github.com/maiaeltufaili/devops-analytics-service.git](https://github.com/maiaeltufaili/devops-analytics-service.git)
cd devops-analytics-service

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run tests:**
```bash
npm test

```


4. **Run locally with Docker Compose:**
```bash
docker compose up --build

```



---

## Environment Variables

To run the application, configure a `.env` file in the root directory with the required variables:

```env
PORT=3000
DOCKER_USERNAME=your_docker_username

```

```

```
