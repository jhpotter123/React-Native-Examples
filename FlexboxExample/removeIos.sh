#!/usr/bin/env bash

# Fixed script for React Native projects
echo "🔍 Searching for React Native iOS app to uninstall..."

# Find the main app's Info.plist (exclude Tests and Pods)
PLIST_PATH=$(find ios -name "Info.plist" | grep -v Pods | grep -v Tests | head -1)
echo "📱 Using Info.plist at: $PLIST_PATH"

if [ -f "$PLIST_PATH" ]; then
    # Get the project folder and name
    PROJECT_DIR=$(dirname "$PLIST_PATH")
    PROJECT_NAME=$(basename "$PROJECT_DIR")
    
    echo "📂 Project name: $PROJECT_NAME"

    # Check if we have an xcworkspace (CocoaPods) or xcodeproj
    if [ -f "ios/$PROJECT_NAME.xcworkspace" ]; then
        BUILD_SETTINGS_TARGET="-workspace ios/$PROJECT_NAME.xcworkspace -scheme $PROJECT_NAME"
        echo "🔨 Using xcworkspace (CocoaPods detected)"
    else
        BUILD_SETTINGS_TARGET="-project ios/$PROJECT_NAME.xcodeproj"
        echo "🔨 Using xcodeproj"
    fi

    # Get bundle ID using xcodebuild
    echo "🔍 Extracting bundle identifier..."
    BUNDLE_ID=$(xcodebuild -showBuildSettings $BUILD_SETTINGS_TARGET 2>/dev/null \
        | grep "PRODUCT_BUNDLE_IDENTIFIER" \
        | head -1 \
        | sed 's/.*= //')

    echo "📦 Detected bundle ID: $BUNDLE_ID"

    if [ -n "$BUNDLE_ID" ]; then
        # Check for running simulator
        SIMULATOR_INFO=$(xcrun simctl list devices | grep Booted)
        
        if [ -n "$SIMULATOR_INFO" ]; then
            echo "📱 Found booted simulator:"
            echo "$SIMULATOR_INFO"
            
            # Extract simulator UDID
            SIMULATOR_UDID=$(echo "$SIMULATOR_INFO" | awk -F '[()]' '{print $(NF-1)}')
            
            echo "🗑️  Uninstalling app from simulator..."
            xcrun simctl uninstall "$SIMULATOR_UDID" "$BUNDLE_ID"
            
            if [ $? -eq 0 ]; then
                echo "✅ Successfully uninstalled $BUNDLE_ID from simulator"
            else
                echo "❌ Failed to uninstall app. It might not be installed."
            fi
        else
            echo "❌ No simulator is currently booted."
            echo "💡 To uninstall from a physical device:"
            echo "   1. Connect your device via USB"
            echo "   2. Install ios-deploy: npm install -g ios-deploy"
            echo "   3. Run: ios-deploy --uninstall_only --bundle_id $BUNDLE_ID"
        fi
    else
        echo "❌ Could not detect bundle identifier."
        echo "💡 Make sure you're in a React Native project directory"
        echo "💡 Try running 'cd ios && pod install && cd ..' first"
    fi
else
    echo "❌ Info.plist not found. Is this a React Native iOS project?"
    echo "💡 Make sure you're in the root directory of your React Native project"
fi