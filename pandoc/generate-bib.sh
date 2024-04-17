#!/bin/bash
# This program uses pandoc to automatically generate the publications html

# Specify a set of default option settings: -d FILE, --defaults=FILE
# FILE is a YAML file whose fields correspond to command-line option settings.

pandoc citeproc.md -d options.yml --metadata lang="en" --metadata title="List of Publications" --template=template.html -o publications.html

# Manually add header for jekyll:
cat header.md publications.html >| ../publications.html

echo "=> If you've added a new paper, don't forget to add the new id to the correct txt file under assets/js/filter/ !!!"