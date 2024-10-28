import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/index";

const Feed = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    // kullanıcı hesap bilgileini al ve state'e aktar
    const unsub = onAuthStateChanged(auth, (user_data) => {
      setUser(user_data);
    });

    // componentWillUnmount tetiklendiğinde yani bileşen ekrandan ayrıldığında kullanıcı oturumunu izlemeyi durdur
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="feed h-screen overflow-hidden bg-black text-white">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
