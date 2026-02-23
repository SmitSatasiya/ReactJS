// | Without Preload          | With Preload              |
// | ------------------------ | ------------------------- |
// | Image loads after render | Image loads before render |
// | Small delay possible     | Faster display            |
// | Normal priority          | High priority             |
// preload() is a React 19 API from react-dom that allows developers to instruct the browser to load critical resources early for better performance.

import { preload } from "react-dom";
import banner from "../../assets/banner.jpg";

preload(banner, { as: "image" });

const Resource_Preload = () => {
  return <img src={banner} alt="Banner" height="500" />;
};

export default Resource_Preload;
