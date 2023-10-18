import { type FC } from 'react'
import { ThemeProvider, themeOzenDark } from '@ozen-ui/kit/ThemeProvider'
import styles from './App.module.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LibrariesList } from './pages/LibrariesList'
import { libraries } from './libraries'
import { LibraryExample } from './pages/LibraryExample'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LibrariesList />,
    },
    ...libraries
      .filter((lib) => Boolean(lib.Example))
      .map(({ name, Example }) => ({
        path: `/lib/${name}`,
        element: (
          <LibraryExample title={name}>
            {Example ? <Example /> : null}
          </LibraryExample>
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
