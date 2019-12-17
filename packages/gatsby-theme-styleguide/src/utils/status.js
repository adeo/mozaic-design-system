export const authorizedPlatforms = [
  'sketch',
  'scss',
  'figma',
  'vue',
  'react',
  'angular',
]

export const authorizedStatus = ['wip', 'bêta', 'stable']

export const checkPlatform = platformInput => {
  if (!platformInput) {
    return platformInput
  }

  const normalizedPlatformInput = platformInput.toLowerCase()

  if (authorizedPlatforms.includes(normalizedPlatformInput)) {
    return normalizedPlatformInput
  }

  return false
}

export const checkStatus = statusInput => {
  if (!statusInput) {
    return statusInput
  }

  const normalizedStatusInput = statusInput.toLowerCase()

  if (authorizedStatus.includes(normalizedStatusInput)) {
    return normalizedStatusInput
  }

  return false
}
