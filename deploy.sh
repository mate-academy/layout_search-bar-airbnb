#!/usr/bin/env bash

DEST=$1

# Commit
echo "git add ${DEST} --force"
git add ${DEST} --force

echo "git commit -m \"make build\" --no-verify"
git commit -m "make build" --no-verify

# Push to gh-pages
echo "git push --delete origin gh-pages"
git push --delete origin gh-pages

echo "git subtree push --prefix ${DEST} origin gh-pages"
git subtree push --prefix ${DEST} origin gh-pages

# Clean up
echo "git reset --soft HEAD^"
git reset --soft HEAD^

echo "rm -rf ${DEST}"
rm -rf ${DEST}

echo "git reset -- ${DEST}"
git reset -- ${DEST}

echo "git checkout ./${DEST}"
git checkout ./${DEST}
