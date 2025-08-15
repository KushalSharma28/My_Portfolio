pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'  // Adjust if installed elsewhere
        PATH = "${env.NODE_HOME};${env.PATH}"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/KushalSharma28/My_Portfolio.git'
            }
        }

        stage('Check Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                bat 'xcopy /E /Y build\\* C:\\inetpub\\wwwroot\\MyPortfolio'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment succeeded!'
        }
        failure {
            echo '❌ Something went wrong during build or deployment.'
        }
    }
}
