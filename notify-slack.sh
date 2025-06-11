#!/bin/bash

# Load .env variables if they exist
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Check if required environment variables are set
if [[ -z "$SLACK_WEBHOOK_URL" ]]; then
  echo "❌ Missing environment variables. Make sure SLACK_WEBHOOK_URL is set."
  exit 1
fi

# Send the Slack notification
curl -X POST -H "Content-type: application/json" \
--data '{
  "text": "!!! The latest Automated Test report for WEB is now available: https://vitals-web-test-reports.surge.sh"
}' "$SLACK_WEBHOOK_URL"
