node {
    def commit_id
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }
    stage('Install Package') {
        nodejs(nodeJSInstallationName: 'nodejs') {
            sh 'npm install'
        }
    }

     stage('Unit Test') {
            sh 'npm run test'
    }

    stage('docker build/push') {
        docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
            def app = docker.build("dipt912/room-booking-ui:${commit_id}", '.').push()
        }
    }
}