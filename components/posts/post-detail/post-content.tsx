import classes from "./post-content.module.css";

import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs-1",
  title: "Getting Started with Nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent: React.FC<{ post: any }> = (props) => {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
