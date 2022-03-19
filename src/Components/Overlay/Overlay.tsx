import { FC } from "react";
import { useSelector } from "react-redux";

const Overlay: FC<{ pageName: string }> = ({ children, pageName }) => {
  const { bg } = useSelector((state: any) => {
    return state.theme;
  });
  return (
    <div
      className={
        bg +
        "col-12 container-fluid full-height " +
        "text-light d-flex flex-column " +
        " align-items-center"
      }
    >
      <div className="display-3 my-5">{pageName}</div>
      {children}
    </div>
  );
};

export default Overlay;
