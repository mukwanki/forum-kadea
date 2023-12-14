/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Post({ post }) {
  return (
    <div>
      <h3>
        {post.author} - {post.dateTime}
      </h3>
      <p>{post.content}</p>
    </div>
  );
}
