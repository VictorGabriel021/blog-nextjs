import classes from "./styles.module.css";

import PostsGrid from "../../posts/posts-grid";

const FeaturedPosts: React.FC<{ posts: any }> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
