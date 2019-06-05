# Heroku Release Phase Sample App

This is a simple sample application designed to showcase Heroku Release Phases, a feature which allows you to automate deploy tasks right before a Heroku app is made publicly available. In this example, a static asset is uploaded to an S3 instance and said asset is referenced in one of the views with help from a S3-hosted base URL for the asset injected in via an environment variable.

The repository includes a set of static assets — in this case, an image and a CSS file — which, at the time of deploy, are coped into S3 (or overwritten) and then referenced in the views. 

The release phase task, defined in the `Procfile` is a standalone, lightweight node application which uploads the assets from the `public` folder into S3.

Any arbitray code or shell script could be executed in this phase.

# Prereqs

You will need:

* A Heroku account
* An Amazon S3 account w/ appropriate public read settings

# Config

You'll need the following environment variables to make this work:

* `AMAZON_S3_BASE_URL` - The fully-qualified S3 base URL for public access to assets stored in S3
* `AMAZON_S3_BUCKET_NAME` - The bucket name for your specific S3 bucket where assets will be uploaded
* `AMAZON_S3_KEY`
* `AMAZON_S3_SECRET`

# Heroku Button

[![One-Click Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Thanks

Big thanks to [![Steve S.]](https://github.com/SShaginyan) @ Heroku for the help. Heroku Solution Engineers are legit.