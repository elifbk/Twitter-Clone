import { CiShare2 } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { auth, db } from "../../firebase";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";

const Buttons = ({ tweet }) => {
  // oturumu açık olan kullanıcı bu tweet'i likeladı mı?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  // like butonuna tıklanınca:

  const toggleLike = async () => {
    // güncellenecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // kullanıcı likeladıysa:
    await updateDoc(tweetRef, {
      likes: isLiked
        ? // user id'sini likes dizisinden kaldır
          arrayRemove(auth.currentUser.uid)
        : // likeladıysa user id'sini likes dizisine ekle
          arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#51d9ff3d]">
        <LuMessageCircle />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#00800067]">
        <FaRetweet />
      </div>

      <div
        onClick={toggleLike}
        className="p-3 rounded-full cursor-pointer transition hover:bg-[rgba(249,65,219,0.42)] flex items-center gap-2"
      >
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        {tweet.likes.length}
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#80808065]">
        <CiShare2 />
      </div>
    </div>
  );
};

export default Buttons;
