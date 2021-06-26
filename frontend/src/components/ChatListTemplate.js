import ReactTimeAgo from "react-time-ago";
import { useContext } from "react";
import { TokenContext } from "./TokenContextProvider";
import decodeToken from "../utils/decodeToken";
import useWhoAmI from "../hooks/useWhoAmI";
import UserAvatar from "./UserAvatar";
import useRemoteSingleProduct from "../hooks/useRemoteSingleProduct";

const ChatListTemplate = (props) => {
  const [token] = useContext(TokenContext);
  const decodedToken = decodeToken(token);

  const { info } = props;

  const [user] = useWhoAmI(info, decodedToken);

  const [product] = useRemoteSingleProduct(info.id_product);

  return user.data && product.data ? (
    <>
      <UserAvatar user={user.data[0]} />
      <h3>{user.data[0].username}</h3>
      <h3>{product.data[0].title}</h3>
      <p>{info.text}</p>
      <p className="time-ago">
        <ReactTimeAgo date={info.date} locale="es-ES" />
      </p>
    </>
  ) : (
    <h3>Cargando mensajes</h3>
  );
};
export default ChatListTemplate;