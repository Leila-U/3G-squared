import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import VideoContentBlock from "./VideoContentBlock";

const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "video") return <VideoContentBlock {...props} />;
  return null;
};

export default ContentBlock;
