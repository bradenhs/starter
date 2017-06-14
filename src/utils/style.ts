import * as typestyle from 'typestyle'

const classNames = new Set<string>()

export function style (...objects: typestyle.types.NestedCSSProperties[]) {
  const className = typestyle.style(...objects)
  if (!classNames.has(className)) {
    typestyle.forceRenderStyles()
    classNames.add(className)
  }
  return className
}
