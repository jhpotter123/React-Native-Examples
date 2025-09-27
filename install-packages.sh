#!/usr/bin/env sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
pushd $DIR

while read p; do
    echo Installing package "$p"
    npm i "$p"
    #npm audit fix --force
done <package-list.txt

popd

