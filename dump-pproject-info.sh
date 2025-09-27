find android/app \
  -path android/app/build -prune -o \
  -path android/.gradle -prune -o \
  -path android/gradle -prune -o \
  -type f ! -name 'build.gradle' \
  ! -name 'gradle.properties' \
  ! -name 'gradlew' \
  ! -name 'gradlew.bat' \
  ! -name 'settings.gradle' \
  ! -name 'debug.keystore' \
  ! -name '*.png' \
  -print -exec cat {} \; ; cat app.json index.js package.json
