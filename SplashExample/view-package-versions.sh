while read p; do
    echo "${p}"
    npm view "${p}" versions
done <package-list.txt
