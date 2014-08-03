#!/bin/sh
rm -rf output/
NANOC_ENV=production nanoc co && nanoc deploy -t production
