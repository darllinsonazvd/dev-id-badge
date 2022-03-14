const socialMedia = {
  github: 'darllinsonazvd',
  instagram: '_darllinson',
  twitter: '_darllinson',
  linkedin: 'darllinson-azevedo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.className

    if (social === 'linkedin') {
      li.children[0].href = `https://linkedin.com/in/${socialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${socialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userPhoto.src = data.avatar_url
      usernameGitHub.textContent = data.login
    })
}

getGitHubProfileInfos()
