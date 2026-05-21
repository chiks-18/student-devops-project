pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git 'https://github.com/chiks-18/student-devops-project.git'
            }
        }

        stage('Build Containers') {

            steps {

                bat 'docker-compose down'

                bat 'docker-compose up --build -d'
            }
        }

        stage('Verify Running Containers') {

            steps {

                bat 'docker ps'
            }
        }
    }
}