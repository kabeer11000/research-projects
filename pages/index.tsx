import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import {Card, Grid} from "@geist-ui/react";

export default function Home() {
    return (
        <Grid.Container justify="center" style={{padding: "1rem"}}>
            <Head>
                <title>Kabeer&apos;s Online Courses</title>
                <meta name="description" content="Free Online Courses by Kabeer\'s Network"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Grid xs={24} md={20} lg={14} xl={10}>
                <Grid.Container justify="center">
                    <Grid xs={24}>
                        <div style={{marginTop: "10vh"}}>
                            <div style={{display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}>
                                <Image width={100} height={100}
                                       src={"https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@kabeersnetwork-web/Assets/images/82fa8b4d4125391e2f20580e0c259a9a528e72c2kslogo.svg"}/>
                                <h1 style={{marginLeft: "1rem"}}>Courses</h1>
                            </div>
                            <h3 hidden>
                                Free online courses by Kabeer&apos;s Network and other contributors
                            </h3>
                        </div>
                    </Grid>
                    <Grid xs={24} style={{marginTop: "3rem"}}>
                        <Grid.Container gap={2} justify="center">
                            <Grid xs={24} md={24 / 2} lg={24 / 3} xl={2 / 4}>
                                <Link href="/courses">
                                    <Card style={{width: "100%"}}>
                                        <h2>Courses &rarr;</h2>
                                        <p>Find in-depth step by step courses.</p>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid xs={24} md={24 / 2} lg={24 / 3} xl={2 / 4}>
                                <Link href="https://kabeersnetwork.tk/redirect/papers">
                                    <Card style={{width: "100%"}}>
                                        <h2>Papers &rarr;</h2>
                                        <p>Find Past Papers and other exam resources!</p>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid xs={24} md={24 / 2} lg={24 / 3} xl={2 / 4}>
                                <Link
                                    href="https://github.com/vercel/next.js/tree/canary/examples">
                                    <Card style={{width: "100%"}}>
                                        <h2>SandBox &rarr;</h2>
                                        <p>Discover, test and deploy your code.</p>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid xs={24} md={24 / 2} lg={24 / 3} xl={2 / 4}>
                                <Link
                                    hidden
                                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                                >
                                    <Card style={{width: "100%"}}>
                                        <h2>Deploy &rarr;</h2>
                                        <p>
                                            Instantly deploy your Next.js site to a public URL with Vercel.
                                        </p>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}
