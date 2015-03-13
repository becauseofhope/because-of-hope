#!/bin/sh
aws s3 --profile boh ls
aws s3 sync --profile boh --delete --acl public-read output/ s3://becauseofhope.org/
