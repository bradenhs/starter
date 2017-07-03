echo "Formatting Code:"
START=$(date +%s.%N)
git diff --staged --diff-filter=dx --name-only HEAD | grep "^src\/.*[.]tsx\?$" | xargs -I % sh -c 'prettier --write --no-semi --single-quote --jsx-single-quote --space-before-function-paren %; git add %'
END=$(date +%s.%N)
DIFF=$(echo "$END - $START" | bc)
echo $DIFF
echo "Done in s"