import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  initialStatus: boolean;
  onClick: () => void;
}

const Like = ({ initialStatus, onClick }: Props) => {
  console.log("initialStatus: ", initialStatus);
  const [status, setStatus] = useState(initialStatus);
  
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  
  console.log("status: ", status);
  if (status)
    return (
      <IconHeartFilled
        color="#ff6b81"
        size={20}
        onClick={toggle}
      ></IconHeartFilled>
    );
  else return <IconHeart size={20} onClick={toggle}></IconHeart>;
};

export default Like;
