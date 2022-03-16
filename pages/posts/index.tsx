import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage: React.FC<{ posts: any }> = (props) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
