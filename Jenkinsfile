pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando código desde GitHub'
                git url: 'https://github.com/adolfomramirez/backend-repo.git', branch: 'develop'
            }
        }
        stage('Build') {
            steps {
                echo 'Construyendo backend...'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando pruebas...'
            }
        }
    }
}
