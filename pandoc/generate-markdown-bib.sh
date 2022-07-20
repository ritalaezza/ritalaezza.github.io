#!/bin/bash
# This program uses pandoc to automatically generate the publications markdown

# Specify a set of default option settings: -d FILE, --defaults=FILE
# FILE is a YAML file whose fields correspond to command-line option settings.

pandoc citeproc.md -d options.yml -o ../publications.md
