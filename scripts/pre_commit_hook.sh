echo "Formatting Staged Files:"
start=$(date +%s.%N)
git diff --staged --diff-filter=dx --name-only HEAD | grep "^src\/.*[.]tsx\?$" | xargs -I % sh -c 'prettier --write --no-semi --single-quote --jsx-single-quote --space-before-function-paren %; git add %'
dur=$(echo "$(date +%s.%N) - $start" | bc)
printf "Done in %.6f seconds" $dur