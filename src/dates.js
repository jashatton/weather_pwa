export function formatDate(timestamp) {
  const currentTime = new Date(timestamp * 1000);
  const options = {
    weekday: 'short',
    year: 'numeric',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  };

  return currentTime.toLocaleString('en-US', options)
}
