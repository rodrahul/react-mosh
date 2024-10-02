import ExpandableText from "./ExpandableText";

const ExpandableTextApp = () => {
  let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam iure reiciendis dolor consequuntur dicta rerum fugit illum quidem non quis laborum provident maiores esse, minima eius, sed, in dignissimos.';

  return (
    <>
      <ExpandableText text={ text} maxChars={10}/>
    </>
  );
};

export default ExpandableTextApp;
