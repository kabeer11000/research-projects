import {allCourses} from "../api";
import {Card, Grid, Text} from "@geist-ui/react";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
    return {
        props: {
            courses: (await allCourses).map(blog => ({title: blog.title, excerpt: blog.excerpt, slug: blog.slug})) || []
        }
    }
}
// .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')
// @ts-ignore
export default function Courses({courses}: { course: Array<{ title: { rendered: string }, slug: string, excerpt: { rendered: string } }> }) {
    return (
        <Grid.Container justify="center">
            <Head>
                <title>Courses - Kabeer&apos;s Online Courses</title>
                <meta name="description" content="Free Online Courses by Kabeer\'s Network"/>
            </Head>
            <Grid xs={24} md={20} lg={14} xl={10}>
                <Card
                    style={{border: "none", backgroundColor: "transparent", paddingTop: "1rem", paddingBottom: "1rem"}}>
                    <div>
                        <div style={{marginBottom: "1rem"}}>
                            <Text h1>All Courses</Text>
                            <Text>Find in-depth step by step courses</Text>
                        </div>
                        <br/>
                        <Grid.Container gap={2} justify="center">
                            {/*@ts-ignore*/}
                            {courses.map(({slug, title, excerpt}) =>
                                <Grid key={slug} xs={24} md={24 / 2} lg={24 / 3} xl={2 / 4}>
                                    <Link
                                        href={"/course/" + slug}>
                                        <Card>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                flexDirection: "row"
                                            }}>
                                                <div>
                                                    <Text h3>{title.rendered}</Text>
                                                    <Text p>{excerpt.rendered.replace(/<[^>]*>?/gm, '')}</Text>
                                                </div>
                                                <Text style={{backgroundColor: "white", padding: "1rem"}}>
                                                    &rarr;
                                                </Text>
                                            </div>
                                        </Card>
                                    </Link>
                                </Grid>
                            )}
                        </Grid.Container>
                    </div>
                </Card>
            </Grid>
        </Grid.Container>
    );
}