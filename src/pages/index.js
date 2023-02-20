import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/Views/Sidebar'
import TopMenu from '@/Views/TopMenu'
import Workflow from '@/Views/Workflow'


export default function Home() {
  return (
    <>
      <Head>
        <title>Workflow</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.sidebar}>
            <Sidebar />
          </div>
        <div className={styles.content}>
          <div className={styles.topMenu}>
            <TopMenu />
          </div>
          <div className={styles.workflow}>
            <Workflow />
          </div>
        </div>
      </main>

    </>
  )
}
