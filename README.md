# DevOps Analytics Service

A production-ready, containerized Node.js analytics microservice featuring a fully automated CI/CD pipeline, automated testing, container orchestration via Docker Compose, and automated cloud deployment to AWS EC2.

---

## Technical Stack & Architecture

* **Runtime:** Node.js, Express
* **Testing:** Jest
* **Containerization:** Docker, Docker Compose, Docker Hub
* **CI/CD Orchestration:** GitHub Actions
* **Cloud Infrastructure:** AWS EC2 (Ubuntu Linux)

---

## CI/CD Pipeline Workflow

The repository includes a two-stage automated workflow defined in `.github/workflows/deploy.yml`:

1. **Test and Build (`test-and-build`):**
* Checks out code on every push or pull request to the `main` branch.
* Sets up the Node.js environment and installs dependencies using `npm ci`.
* Executes automated test suites via Jest.
* Authenticates with Docker Hub securely using encrypted repository secrets.
* Builds the container image and pushes the latest tag to Docker Hub.


2. **Deploy (`deploy`):**
* Triggers automatically upon successful completion of the build phase on the `main` branch.
* Connects securely to the AWS EC2 target instance via SSH.
* Automatically provisions Docker Engine and Docker Compose if missing on the target host.
* Pulls the latest repository updates and environment configurations.
* Gracefully tears down existing containers (`docker compose down`), pulls updated images, and redeploys the live service stack (`docker compose up -d --build`).



---

## Project Structure

```text
devops-analytics-service/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD workflow configuration
├── src/                    # Application source code and API endpoints
├── tests/                  # Automated test suites (Jest)
├── Dockerfile              # Multi-stage container build definition
├── docker-compose.yml      # Multi-container service orchestration
├── package.json            # Node.js dependencies and project scripts
└── README.md               # Project documentation

```

---

## Local Development & Setup

To run, test, and develop the service locally:

1. **Clone the repository:**
```bash
git clone https://github.com/maiaeltufaili/devops-analytics-service.git
cd devops-analytics-service

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run automated tests:**
```bash
npm test

```


4. **Run locally using Docker Compose:**
```bash
docker compose up --build

```



---

## Environment Configuration

Create a `.env` file in the root directory of the project for local execution:

```env
PORT=3000
DOCKER_USERNAME=your_docker_username

```

For production deployments on AWS EC2, the pipeline dynamically generates the `.env` file using GitHub Actions Secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`, `SERVER_IP`, `SERVER_USER`, and `SSH_PRIVATE_KEY`).
