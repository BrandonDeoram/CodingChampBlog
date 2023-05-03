import Head from "next/head";
import { getPosts } from "../services";
import { PostCard, Categories, PostWidget } from "../components";
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Coding Champ Blog</title>
      </Head>

      {/* Looping through post  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div className="" key={index}>
              <PostCard post={post.node} key={post.title}></PostCard>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget></PostWidget>
            <Categories></Categories>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
