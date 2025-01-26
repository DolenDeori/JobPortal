export function timeAgo(postDateStr) {
  // Parse the input date
  const postDate = new Date(postDateStr);
  const today = new Date();

  // Calculate the difference in milliseconds
  const diffTime = today - postDate;

  // Convert the difference to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    return "Today";
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}
timeAgo;
