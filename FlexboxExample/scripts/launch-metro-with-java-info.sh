#!/bin/bash
# Small wrapper to show JAVA info before starting Metro in a new window
printf "===== JAVA INFO (before Metro) =====\n"
printf "JAVA_HOME=%s\n" "$JAVA_HOME"
java -version 2>&1 | sed -n '1,3p'
printf "====================================\n\n"

# Call the actual metro launcher
"$(pwd)/node_modules/react-native/scripts/launchPackager.command"
