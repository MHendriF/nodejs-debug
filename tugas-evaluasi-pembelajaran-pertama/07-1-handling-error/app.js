function parseURL(url) {
  try {
    return new URL(url);
  } catch (error) {
    return null;
  }
}

// example case
const parsedUrl = parseURL('https://www.google.com');
if (parsedUrl !== null) {
  console.log(parsedUrl);
} else {
  console.log('URL tidak valid.');
}

