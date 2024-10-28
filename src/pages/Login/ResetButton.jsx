import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

const ResetButton = ({ email }) => {
  // şifre sıfırlama e-postası gönder
  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() =>
        toast.info(
          "Şifre sıfırlama e-postası gönderildi. Mailinizi kontrol edin."
        )
      )
      .catch(() => toast.error("Mail gönderilemiyor"));
  };

  return (
    <button onClick={handleReset} className="text-red-500">
      Şifreni mi unuttun ?
    </button>
  );
};

export default ResetButton;
