pipeline {
    // 1. ใช้ agent any ปลอดภัยสุด รันได้ทุกที่
    agent any 
    
    // (Optional) ถ้าโรงเรียนลง NodeJS plugin ไว้ ให้เปิดใช้ตรงนี้
    // tools { nodejs 'NodeJS' } 

    environment {
        VERCEL_PROJECT_NAME = 'learn-jenkins-app'
        VERCEL_TOKEN = credentials('vercel-token') 
    }

    stages {
        stage('Test npm') {
            steps {
                // เช็ค version เฉยๆ
                sh 'npm --version'
                sh 'node --version'
            }
        }

        stage('Build') {
            steps {
                // 2. ใช้ npm install ชัวร์กว่า npm ci
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test Build') {
            steps {
                // รัน Test ตามที่เราแก้ใน package.json ไว้
                sh 'npm run test'
            }
        }

        stage('Deploy') {
            steps {
                // 3. ใช้คำสั่ง Deploy แบบบรรทัดเดียว (ไม่ต้อง link ให้วุ่นวาย)
                // --yes = ไม่ต้องถาม
                // --force = ทับของเก่าได้เลย
                sh 'npx vercel --prod --yes --force --token $VERCEL_TOKEN --name $VERCEL_PROJECT_NAME'
            }
        }
    }
}