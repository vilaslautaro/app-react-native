import { useState } from "react";

const useColorSwitch = () => {
  const [modeDark, setModeDark] = useState(false);

  const toggleMode = () => {
    setModeDark(!modeDark);
  };

  return { modeDark, toggleMode };
};

export default useColorSwitch;
