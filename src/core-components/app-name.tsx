import Logo from "../assets/images/logo.svg?react";
import Icon from "../components/icon";

export default function AppName() {
  return (
    <div className="bg-gray-600 h-12 w-30 rounded-br-lg">
      <Icon svg={Logo} />
    </div>
  );
}
