import { Beanify } from 'beanify'
import {
  BeanifyMarkdown,
  MarkdownOptions,
  MarkdownRouteOptions
} from './types/options'

declare const markdown: BeanifyMarkdown

export = markdown
export { MarkdownRouteOptions }

declare module 'beanify' {
  interface BeanifyPlugin {
    (plugin: BeanifyMarkdown, opts: MarkdownOptions): Beanify
  }

  interface Route {
    markdown?: MarkdownRouteOptions
    md?: MarkdownRouteOptions
  }
}
