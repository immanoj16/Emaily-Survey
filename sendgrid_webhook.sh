#!/usr/bin/env bash
function localtunnel {
  ngrok http 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done