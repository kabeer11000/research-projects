import {allCourses} from "../../api";
import {Card, Grid, Text} from "@geist-ui/react"
import Markdown from "markdown-to-jsx";
import {Fragment, SVGProps} from "react";
import Head from "next/head";
import Link from "next/link";
// @ts-ignore
export const getStaticProps = async ({params}) => {
    const _ = (await allCourses);
    const currentIndex = _.findIndex(({slug}) => slug === params.slug);
    return {
        props: {
            course: _[currentIndex],
            next: _[currentIndex + 1] ?? null,
            prev: _[currentIndex - 1] ?? null
        }
    }
}
// const Image = (props: JSX.IntrinsicAttributes & SVGProps<SVGImageElement>) => <img {...props} style={{
//     width: "100%",
//     height: "auto"
// }}/>
// const Video = (props: JSX.IntrinsicAttributes & SVGProps<SVGImageElement>) => <video {...props} style={{
//     width: "100%",
//     height: "auto"
// }}/>
// @ts-ignore
export default function Course({course, prev, next}) {
    return (
        <div>
            <Head>
                <title>{course?.title.rendered} - Kabeer&apos;s Online Courses</title>
                <meta name="description" content="Free Online Courses by Kabeer\'s Network" />
            </Head>
            <div>
                <Grid.Container justify="center">
                    <Grid xs={24} md={20} lg={14} xl={10}>
                        <Card style={{border: "none", backgroundColor: "transparent", paddingTop: "1rem", paddingBottom: "1rem"}}>
                            <div style={{marginBottom: "1rem"}}>
                                <Text h1>{course?.title?.rendered}</Text>
                            </div>
                            <br/>
                            <div>
                                <Markdown options={{
                                    wrapper: 'aside', forceWrapper: true,
                                    // overrides: {
                                    //     "video": {
                                    //         component: Video,
                                    //     },
                                    //     "image": {
                                    //         component: Image,
                                    //     }
                                    // }
                                }}>
                                    {course?.content?.rendered}
                                </Markdown>
                            </div>
                            <div style={{display: "flex", marginTop: "3rem", justifyContent: "space-between"}}>
                                {prev && <Link href={"/course/" + prev.slug}><Card>
                                    <Text>← {prev.title.rendered}</Text>
                                </Card></Link>}
                                <div style={{flexGrow: "1 1 auto"}}/>
                                {next && <Link href={"/course/" + next.slug}><Card>
                                    <Text>{next.title.rendered} →</Text>
                                </Card></Link>}
                            </div>
                        </Card>
                    </Grid>
                </Grid.Container>
            </div>
        </div>
    );
}
export const getStaticPaths = async () => {
    console.log((await allCourses).map(({slug}) => `/course/${slug}`) || [])
    return {
        paths: (await allCourses).map(({slug}) => `/course/${slug}`) || [],
        fallback: false,
    }
}
