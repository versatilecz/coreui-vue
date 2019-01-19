export default function presentClass(...classNames) {
  if (!classNames.length) return false

  const matchAny = typeof classNames[classNames.length - 1] === 'boolean'
    ? classNames.pop()
    : false

  const matcher = matchAny
    ? (p, c) => c ? c : p
    : (p, c) => c ? p : c

  return classNames
    .map(cn => document.body.classList.contains(cn))
    .reduce(matcher, !matchAny)
}
