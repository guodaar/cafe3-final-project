import { orange, yellow } from "../../consts/colors";

import { TailSpin } from "react-loader-spinner";
import { darkLavender } from "../../consts/colors";

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <TailSpin
      height="50"
      width="50"
      color={darkLavender}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
      wrapperClass="blocks-wrapper"
      visible={isLoading}
    />
  );
};

export default Loader;
