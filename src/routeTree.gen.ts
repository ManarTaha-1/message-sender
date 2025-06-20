/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MessagesImport } from './routes/messages'
import { Route as LoginImport } from './routes/login'
import { Route as InstitutionsImport } from './routes/institutions'
import { Route as ImagesImport } from './routes/images'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const MessagesRoute = MessagesImport.update({
  id: '/messages',
  path: '/messages',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const InstitutionsRoute = InstitutionsImport.update({
  id: '/institutions',
  path: '/institutions',
  getParentRoute: () => rootRoute,
} as any)

const ImagesRoute = ImagesImport.update({
  id: '/images',
  path: '/images',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/images': {
      id: '/images'
      path: '/images'
      fullPath: '/images'
      preLoaderRoute: typeof ImagesImport
      parentRoute: typeof rootRoute
    }
    '/institutions': {
      id: '/institutions'
      path: '/institutions'
      fullPath: '/institutions'
      preLoaderRoute: typeof InstitutionsImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/messages': {
      id: '/messages'
      path: '/messages'
      fullPath: '/messages'
      preLoaderRoute: typeof MessagesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/images': typeof ImagesRoute
  '/institutions': typeof InstitutionsRoute
  '/login': typeof LoginRoute
  '/messages': typeof MessagesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/images': typeof ImagesRoute
  '/institutions': typeof InstitutionsRoute
  '/login': typeof LoginRoute
  '/messages': typeof MessagesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/images': typeof ImagesRoute
  '/institutions': typeof InstitutionsRoute
  '/login': typeof LoginRoute
  '/messages': typeof MessagesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/images' | '/institutions' | '/login' | '/messages'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/images' | '/institutions' | '/login' | '/messages'
  id: '__root__' | '/' | '/images' | '/institutions' | '/login' | '/messages'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ImagesRoute: typeof ImagesRoute
  InstitutionsRoute: typeof InstitutionsRoute
  LoginRoute: typeof LoginRoute
  MessagesRoute: typeof MessagesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ImagesRoute: ImagesRoute,
  InstitutionsRoute: InstitutionsRoute,
  LoginRoute: LoginRoute,
  MessagesRoute: MessagesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/images",
        "/institutions",
        "/login",
        "/messages"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/images": {
      "filePath": "images.tsx"
    },
    "/institutions": {
      "filePath": "institutions.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/messages": {
      "filePath": "messages.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
