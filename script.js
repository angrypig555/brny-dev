const user = 'angrypig555';
const repo = 'brny-dev';

console.log("hi, thanks for visiting this amazing site")

fetch(`https://api.github.com/repos/${user}/${repo}/commits/main`)
  .then(response => response.json())
  .then(data => {
    const sha = data.sha.substring(0, 7); // Shorten the ID
    const link = document.getElementById('gh-link');
    link.innerText = sha;
    link.href = `https://github.com/${user}/${repo}/commit/${data.sha}`;
  })
  .catch(err => console.error('Could not fetch version', err));