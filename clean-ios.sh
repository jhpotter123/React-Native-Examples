#!/usr/bin/env sh

rm -rf ~/Library/Developer/Xcode/DerivedData

cd ios
rm -rf Pods Podfile.lock
arch -x86_64 pod install --repo-update
cd ..
