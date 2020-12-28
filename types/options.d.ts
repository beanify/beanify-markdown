import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'

export class MarkdownOptions extends PluginOptions {
  dir?: string
  title?: string
}

export type BeanifyMarkdown = (
  beanify: Beanify,
  opts: MarkdownOptions,
  done: PluginDoneCallback
) => Promise<void>

export interface MarkdownRouteOptions {
  name?: string
  description?: string
  desc?: string
}
