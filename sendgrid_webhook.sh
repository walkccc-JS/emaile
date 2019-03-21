function localtunnel {
  lt -s b26feebb291a6 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
