# Heroku Release Phase Sample App

This is a simple sample application designed to showcase Heroku Release Phases, a feature which allows you to automate deploy tasks right before a Heroku app is made publicly available. In this example, a static asset is uploaded to an S3 instance and said asset is referenced in one of the views with help from a S3-hosted base URL for the asset injected in via an environment variable.

# Prereqs

You will need:

* A Heroku account
* An Amazon S3 account

# Config

You'll need the following environment variables to make this work:

* `AMAZON_S3_BASE_URL`

# Heroku Button

[![One-Click Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Thanks

Big thanks to Steve @ Heroku for the help. Heroku Solution Engineers are legit.
