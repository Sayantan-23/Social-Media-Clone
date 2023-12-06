import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={851} replies={245} postImage="/post-1.avif" postTitle="It is my first post" />
      <UserPost likes={124} replies={45} postImage="/post-2.avif" postTitle="It is my first post" />
      <UserPost likes={325} replies={125} postImage="/post-3.avif" postTitle="It is my first post" />
      <UserPost likes={1451} replies={345} postImage="/post-4.avif" postTitle="It is my first post" />
    </>
  )
}

export default UserPage