import { type FC } from 'react'

import { themeOzenDark, ThemeProvider } from '@ozen-ui/kit/ThemeProvider'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { libraries } from './libraries'
import { LibrariesList } from './pages/LibrariesList'
import { LibraryPlayground } from './pages/LibraryPlayground'

import styles from './App.module.scss'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LibrariesList />,
    },
    ...libraries
      .filter((lib) => Boolean(lib.Example))
      .map(({ name, directory, Example }) => ({
        path: `/lib/${name}`,
        element: (
          <LibraryPlayground name={name} directory={directory} example={Example} />
        ),
      })),
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)

export const App: FC = () => {
  return (
    <ThemeProvider theme={themeOzenDark}>
      <div className={styles.root}>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}
