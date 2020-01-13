#!/bin/sh
echo $1 | iconv -t UTF-8//TRANSLIT | sed -E 's/[^a-zA-Z0-9]+//g' | sed -E 's/refsheads//g' | sed -E 's/^-+\\|-+$//g' | tr A-Z a-z