pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'master',
                url: 'https://github.com/chiks-18/student-devops-project.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                bat 'docker build -t student-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                bat 'docker build -t student-frontend ./frontend'
            }
        }

        stage('Deploy To Kubernetes') {
            steps {

                bat 'kubectl rollout restart deployment backend'
                bat 'kubectl rollout restart deployment frontend'

            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get svc'
            }
        }
    }
}