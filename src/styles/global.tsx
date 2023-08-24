import { GlobalStyles as Global, css } from '@mui/material'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        // Use a more-intuitive box-sizing model.
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        // Remove default margin
        * {
          margin: 0;
        }

        // Allow percentage-based heights in the application
        html,
        body,
        #root {
          height: 100%;
        }

        body,
        input,
        textarea,
        button {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 1rem;
        }

        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }

        ol,
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
          display: block;
          vertical-align: middle;
        }

        *,
        ::before,
        ::after {
          border-width: 0;
          border-style: solid;
        }

        a:visited {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  )
}
