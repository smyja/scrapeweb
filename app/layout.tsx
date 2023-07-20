import EmotionProvider from '../components/Providers/emotion';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head></head>
      <body>
        <EmotionProvider>
          {children}
        </EmotionProvider>
      </body>
    </html>
  );
}