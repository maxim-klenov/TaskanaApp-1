import Inbox from "./icons/Inbox";
import Plus from "./icons/Plus";

const iconTypes = {
  plus: Plus,
  inbox: Inbox
}
const Icon = ({'aria-hidden': ariaHidden = false, ...props}) => {
  if (!(props.name in iconTypes)) return; 
  const IconComponent = iconTypes[props.name];
  return <IconComponent aria-hidden={ariaHidden} {...props}/>;
}

export default Icon;