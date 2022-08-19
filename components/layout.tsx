import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className="flex flex-col min-h-screen">{children}</main>
    </>
  )
}
