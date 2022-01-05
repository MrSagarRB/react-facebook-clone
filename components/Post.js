function Post({ name, message, email, postImage, image }) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <img className="rounded-full" src={image} width={40} height={40} />
        </div>
        <div>
            <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
