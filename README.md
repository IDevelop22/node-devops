
# Node.js Express Application with Redis-based Cookie Authentication

This is a Node.js Express application that features Redis-based cookie authentication for secure user sessions. The application is containerized using Docker, hosted on Amazon EC2, and has a Jenkins CI/CD pipeline for automated testing and deployment. Additionally, SonarQube and Trivy are integrated for code analysis and security scanning.

## Features

- Node.js and Express for building the backend.
- Redis for session management and authentication.
- Docker containers for easy deployment and scaling.
- Jenkins CI/CD pipeline for automated testing and deployment.
- SonarQube for code quality and security analysis.
- Trivy for container image scanning and vulnerability detection.

## Installation

### Prerequisites

- Node.js and npm installed.
- Redis server running.
- Docker and Docker Compose installed.
- Jenkins server set up.
- SonarQube and Trivy installed and configured.

### Clone the Repository

```bash
git clone (https://github.com/IDevelop22/node-devops.git)
cd node-devops
```

### Install Dependencies

```bash
npm install
```

### Configuration

1. Copy the `.env.example` file to `.env` and configure your environment variables.

2. Update Jenkins pipeline configuration files in the `jenkins/` directory to match your Jenkins server setup.

### Start the Application Locally

```bash
npm start
```

## CI/CD Pipeline

This project uses Jenkins for Continuous Integration and Continuous Deployment. The Jenkins pipeline configuration can be found in the `Jenkinsfile` within the repository. It includes stages for building, testing, and deploying the application.

## Code Analysis

### SonarQube

We use SonarQube for static code analysis. The analysis results can be accessed by visiting the SonarQube server.

### Trivy

Trivy is integrated to scan Docker container images for vulnerabilities. Ensure that Trivy is set up and running as part of your CI/CD pipeline.

## Docker

Docker is used to containerize the application. You can build and run the Docker containers locally or deploy them to your EC2 instance.

### Build and Run Locally

```bash
docker-compose up --build
```

### Deploy to EC2

1. Install Docker and Docker Compose on your EC2 instance.

2. Copy your application code and Docker Compose configuration to your EC2 instance.

3. Run your Docker compose up -f (dev or prod file) on the EC2 instance.

### Future Improvements
(very important: sercret and credential management,currentyl using environment variables for sensisitive data)
1. Add Tests and quality gates for sonarcube
2. Extend jenkins pipeline to push images and have multiple environments (currently on prod is hosted,dev is run locally with docker compose)
3. Use Managed database to decouple database from app server and allow for easy auto scaling
4. Add server metric monitoring with auto scaling for app server

## Support and Contributions

Feel free to submit issues, feature requests, or contribute to this project by creating a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---



