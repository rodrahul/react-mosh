import { useState } from "react";
import MyButton from "../../MyButton";

interface Props {
  text: string;
  maxChars?: number;
}

const ExpandableText = ({ text, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxChars) return text;

  const displayText = isExpanded ? text : text.substring(0, maxChars) + "...";

  return (
    <>
      <p>{displayText}</p>
      <MyButton
        type="primary"
        buttonText={isExpanded ? "More" : "Less"}
        onClick={() => setIsExpanded(!isExpanded)}
      ></MyButton>
    </>
  );
};

export default ExpandableText;
