pipeline {
    agent any

    // 👉 เพิ่มตรงนี้เพื่อให้ Jenkins รู้จักคำสั่ง npm
    tools {
        nodejs 'NodeJS' 
    }

    environment {
        // ชื่อกุญแจของน้อง (อันเดิมที่ถูกแล้ว)
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