#!/bin/bash
# This program uses pandoc to automatically generate the publications markdown

pandoc -t markdown_strict --citeproc --standalone test_citeproc.md -o ../publications.md --defaults options.yml
