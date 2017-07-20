import * as React from 'react'
import { AppModel } from '~/model'
import { IReactComponent } from 'mobx-react'

export function observer<P> (clazz: IReactComponent<P>)
export function observer (...args: any[]) {}

export type IReactComponent<P> =
  | React.StatelessComponent<P>
  | React.ComponentClass<P>
export type IWrappedComponent<P> = {
  wrappedComponent: IReactComponent<P>
  wrappedInstance: React.ReactElement<P> | void
}

export function observer<P> (
  clazz: IReactComponent<P>
): React.ClassicComponentClass<P>
