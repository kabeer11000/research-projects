import {IBlog} from "./types";

export const allCourses: Promise<Array<IBlog>> = fetch('http://courses-headless-cms.kabeersnetwork.rf.gd/wp-json/wp/v2/posts?per_page=100', {
    headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Cookie": "_test=226d728f9e274b900b283e83b43da83a; wordpress_logged_in_76f9ca558612509cc7dd8c98684937a7=kabeer11000%7C1663689111%7CsaDlfxyNIry9kkCtt8x51uVGBIKAZlG9FXK9I6fPuyF%7Cec4b673a6427fd2d1e31e3973475ce6d8f59332f7a868180eef59b31960439a7; wp-settings-time-1=1663516672; wp-settings-1=editor%3Dhtml; wp-editormd-lang=en-US",
        DNT: "1",
        Host: "courses-headless-cms.kabeersnetwork.rf.gd",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    }
}).then(res => res.json());
// export const allCourses: Promise<Array<IBlog>> = fetch('https://11ty.foxnet.fi/wp-json/wp/v2/posts?per_page=10').then(res => res.json())