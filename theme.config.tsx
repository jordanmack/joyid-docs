import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <svg
    height="20"
    viewBox="0 0 470 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M191.298 106.48C187.758 103.76 185.828 99.6004 185.498 94.0104L199.148 87.3004C199.428 90.4404 200.238 92.7804 201.598 94.3204C202.958 95.8604 204.948 96.6204 207.588 96.6204C211.048 96.6204 213.738 95.3504 215.638 92.8004C217.538 90.2504 218.968 86.2903 219.918 80.9103L228.438 32.6104H243.498L234.728 82.3804C232.968 92.3704 229.378 99.5603 223.958 103.96C218.538 108.36 212.228 110.56 205.028 110.56C199.408 110.57 194.838 109.21 191.298 106.48Z"
      fill="currentColor"
    />
    <path
      d="M251.989 67.2007C255.279 62.8707 259.249 59.5307 263.879 57.1907C268.519 54.8507 273.289 53.6807 278.209 53.6807C283.059 53.6807 287.369 54.8507 291.149 57.1907C294.929 59.5307 297.699 62.8707 299.459 67.2007C301.219 71.5307 301.609 76.5207 300.609 82.1807C299.609 87.8407 297.469 92.8306 294.179 97.1606C290.889 101.491 286.949 104.811 282.349 107.111C277.749 109.411 273.029 110.571 268.179 110.571C263.259 110.571 258.889 109.421 255.069 107.111C251.249 104.811 248.459 101.491 246.699 97.1606C244.929 92.8306 244.549 87.8407 245.549 82.1807C246.559 76.5207 248.699 71.5307 251.989 67.2007ZM262.079 93.6506C263.969 96.4806 266.719 97.8907 270.319 97.8907C273.919 97.8907 277.149 96.4806 279.999 93.6506C282.849 90.8206 284.709 87.0007 285.549 82.1807C286.399 77.3607 285.899 73.5206 284.049 70.6506C282.199 67.7906 279.469 66.3506 275.869 66.3506C272.269 66.3506 269.019 67.7806 266.129 70.6506C263.229 73.5106 261.359 77.3507 260.509 82.1807C259.669 87.0007 260.189 90.8206 262.079 93.6506Z"
      fill="currentColor"
    />
    <path
      d="M349.668 55.04H364.728L329.688 116.44C325.978 122.94 322.158 127.63 318.218 130.53C314.278 133.43 309.748 134.88 304.618 134.88C302.128 134.88 299.848 134.51 297.798 133.78C295.748 133.05 294.028 132.05 292.658 130.8L300.328 119.69C302.138 121.23 304.288 121.99 306.778 121.99C308.368 121.99 309.798 121.66 311.058 121C312.318 120.33 313.608 119.18 314.938 117.54C316.268 115.9 317.908 113.47 319.858 110.26L306.218 55.05H322.428L330.068 92.4501L349.668 55.04Z"
      fill="currentColor"
    />
    <path
      d="M378.648 109.31H363.588L377.108 32.6201H392.168L378.648 109.31Z"
      fill="currentColor"
    />
    <path
      d="M433.419 32.6201C440.829 32.6201 447.269 34.1201 452.729 37.1301C458.189 40.1401 462.149 44.5101 464.599 50.2801C467.049 56.0401 467.569 62.9001 466.159 70.8701C464.749 78.8301 461.809 85.7101 457.329 91.5101C452.839 97.3101 447.359 101.73 440.859 104.76C434.369 107.8 427.379 109.32 419.899 109.32H394.549L408.069 32.6301H433.419V32.6201ZM420.419 96.3201C428.589 96.3201 435.249 94.1201 440.389 89.7201C445.529 85.3201 448.819 79.0401 450.259 70.8601C451.679 62.8301 450.569 56.6001 446.959 52.1601C443.339 47.7301 437.479 45.5101 429.379 45.5101H420.859L411.899 96.3201H420.419Z"
      fill="currentColor"
    />
    <path
      d="M120.369 66.37C125.234 66.37 129.179 62.4256 129.179 57.56C129.179 52.6944 125.234 48.75 120.369 48.75C115.503 48.75 111.559 52.6944 111.559 57.56C111.559 62.4256 115.503 66.37 120.369 66.37Z"
      fill="#8CDD00"
    />
    <path
      d="M61.0583 48.75C56.6483 48.75 53.0684 52.33 53.0684 56.74C53.0684 61.15 56.6483 64.73 61.0583 64.73C65.4683 64.73 69.0484 61.15 69.0484 56.74C69.0384 52.33 65.4683 48.75 61.0583 48.75Z"
      fill="#8CDD00"
    />
    <path
      d="M85.1376 42.2002L76.3076 84.1802C75.4876 88.1002 71.9776 90.9402 67.9776 90.9402C65.3876 90.9402 62.9776 89.7801 61.3476 87.7701C60.0776 86.2001 59.4376 84.2702 59.4676 82.2902L43.5176 86.4102C44.1976 90.5902 45.9176 94.5802 48.6576 97.9902C53.3876 103.86 60.4276 107.23 67.9676 107.23C79.6276 107.23 89.8276 98.9502 92.2276 87.5402L101.768 42.2101H85.1376V42.2002Z"
      fill="#C1C1C1"
    />
    <path
      d="M159.878 12.37C154.528 5.77999 146.588 2 138.098 2H118.448L115.018 18.28H138.098C141.658 18.28 144.988 19.86 147.228 22.63C149.468 25.39 150.338 28.98 149.608 32.46L146.178 48.75H162.818L165.548 35.82C167.288 27.51 165.228 18.96 159.878 12.37Z"
      fill="#8CDD00"
    />
    <path
      d="M135.078 101.53C132.678 112.93 122.488 121.2 110.838 121.2H93.348L89.918 137.48H110.838C130.138 137.48 147.038 123.77 151.008 104.88L153.888 91.1797H137.248L135.078 101.53Z"
      fill="#8CDD00"
    />
    <path
      d="M15.1479 34.5997L12.168 48.7598H28.8079L31.0779 37.9597C33.4779 26.5597 43.6679 18.2897 55.3179 18.2897H72.0779L75.5079 2.00977H55.3179C36.0179 1.99977 19.1179 15.7097 15.1479 34.5997Z"
      fill="#8CDD00"
    />
    <path
      d="M18.9279 116.84C16.6879 114.08 15.8179 110.49 16.5479 107.01L19.5879 92.5801L1.98787 97.1201L0.607931 103.66C-1.14207 111.97 0.927914 120.52 6.27791 127.11C11.6279 133.7 19.5679 137.48 28.0579 137.48H46.9779L50.4079 121.2H28.0579C24.4979 121.19 21.1679 119.61 18.9279 116.84Z"
      fill="#8CDD00"
    />
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/nervina-labs/joyid-docs',
  },
  docsRepositoryBase: 'https://github.com/nervina-labs/joyid-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - JoyID Docs',
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.joy.id/api/og?title=Documentation'
        : `https://docs.joy.id/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Universal Account Protocol for Web3 Mass-adoption."
        />
        <meta
          name="og:description"
          content="Universal Account Protocol for Web3 Mass-adoption."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="joy.id" />
        <meta name="twitter:url" content="https://docs.joyi.id" />
        <meta
          name="og:title"
          content={title ? title + ' - JoyID Docs' : 'JoyID Docs'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="JoyID Docs" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    autoCollapse: false,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Nervina Labs.
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
}

export default config
