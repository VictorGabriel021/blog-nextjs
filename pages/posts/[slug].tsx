import { GetStaticPaths, GetStaticProps } from "next";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const PostDetailPage: React.FC<{ post: any }> = (props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
