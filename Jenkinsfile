// Declarative syntax

// Required
pipeline {
  // Run no any available Jenkins. It can be a node, an executor on that node, etc
  // Required
  agent any

  // Required
  stages {
    stage("install deps") {
      steps {
        // Here goes the script
        // sh 'npm install'
        echo "Installing the dependencies"
      }
    }

    stage("build the application") {
      steps {
        // Here goes the script
        // sh 'npm install'
        echo "Build the application"
      }
    }

    stage("test the application") {
      steps {
        // Here goes the script
        // sh 'npm install'
        echo "Test the app"
      }
    }
  }
}

/* The following is equivalent to:
 pipeline {
   agent any
 }
 */
// node {
//   // groovy script
// }
