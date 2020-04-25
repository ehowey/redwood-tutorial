/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, routes } from '@redwoodjs/router'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

const BlogLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header sx={{ bg: ['green', 'red', 'blue'] }}>
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default BlogLayout
