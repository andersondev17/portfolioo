import '@/resources/globals.css';
import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';


import { Footer, Header, Providers, RouteGuard } from '@/components';
import { baseURL, effects, fonts, home, style } from '@/resources';
import { Background, Column, Flex, Meta, opacity, SpacingToken } from "@once-ui-system/core";
import classNames from "classnames";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
                'scroll-smooth antialiased'

      )}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/trademarks/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/trademarks/apple-touch-icon.png" />

        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Anderson Lopez" />

        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const config = {
                    brand: "${style.brand}",
                    accent: "${style.accent}", 
                    neutral: "${style.neutral}",
                    solid: "${style.solid}",
                    border: "${style.border}",
                    surface: "${style.surface}",
                    transition: "${style.transition}",
                    scaling: "${style.scaling}"
                  };
                  
                  // Aplicar configuración
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  const getTheme = () => {
                    const saved = localStorage.getItem('data-theme');
                    if (saved && saved !== 'system') return saved;
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  };
                  
                  root.setAttribute('data-theme', getTheme());
                  
                } catch (e) {
                  console.error('Theme init failed:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>

      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{ display: false }}
            lines={{ display: false }}
          />
          {/* SPACER  */}
          <Flex fillWidth minHeight="16" hide="s" />

          {/* NAV */}
          <Header />

          {/* 📄 MAIN CONTENT */}
          <Flex
            zIndex={0}
            fillWidth
            padding="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>
                {children}
              </RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}