# meet

- Deployed app link: https://maniksom.github.io/meet/

## Description

Meet Again is a proof-of-concept progressive web app that lets a user search for tech events in one's city. At a glance you can see how many events are happening in a particular city and timespan, the details of those events among other.

It's currently connected to a demo Google Calendar for testing purposes. But because it uses the Google Calendar API, in principle it could connect to any live events calendar. It uses serverless functions written with Node/express (Lambda functions) hosted on AWS. Requests come from Frontend (written on React) to Lambda Function to data in Backend (Google Calender API).
