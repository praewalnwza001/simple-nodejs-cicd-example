pipeline {
    agent any
    tools {
        nodejs 'NodeJS' 
    }

    environment {
        VERCEL_TOKEN = credentials('DevOps23-vercel-token')
    }

    stages {
        stage('Test npm') {
            steps {
                sh 'npm --version'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // สั่ง Deploy
                sh 'npx vercel --prod --yes --force --token $VERCEL_TOKEN --name zin-exam-project'
            }
        }
    }
}