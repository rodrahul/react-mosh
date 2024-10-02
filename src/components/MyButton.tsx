export interface ButtonProps {
  type:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "link"
    | "light"
    | "dark";
  buttonText: string;
  onClick: () => void;
}

const MyButton = ({ type, buttonText, onClick }: ButtonProps) => {
  let buttonClass = "";

  switch (type) {
    case "primary":
      buttonClass =
        "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700";
      break;
    case "secondary":
      buttonClass =
        "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700";
      break;
    case "success":
      buttonClass =
        "bg-green-500 text-white hover:bg-green-600 active:bg-green-700";
      break;
    case "warning":
      buttonClass =
        "bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-600";
      break;
    case "danger":
      buttonClass = "bg-red-500 text-white hover:bg-red-600 active:bg-red-700";
      break;
    case "info":
      buttonClass = "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700";
      break;
    case "link":
      buttonClass = "text-blue-500 hover:text-blue-600  active:text-blue-700";
      break;
    case "light":
      buttonClass =
        "bg-gray-200 text-black hover:bg-gray-300 active:bg-gray-400";
      break;
    case "dark":
      buttonClass =
        "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900";
      break;
  }
  return (
    <button
      className={`rounded-md p-2 pl-4 pr-4 text-center text-lg ${buttonClass}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default MyButton;
