import CountDownToLaunch from "./countdown";
import Message from "./Message";

const Tag = () => {
  const textToggle = () => {
    document.querySelector(".Date").classList.toggle("hide");
    document.querySelector(".InfoArea").classList.toggle("hide");
  };

  return (
    <div className="container">
      <h1>
        Live your{" "}
        <u id="target" onMouseEnter={textToggle} onMouseLeave={textToggle}>
          life:
        </u>{" "}
      </h1>
      <CountDownToLaunch />
      <Message />
    </div>
  );
};

export default Tag;
