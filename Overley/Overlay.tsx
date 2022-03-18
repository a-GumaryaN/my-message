import { FC } from "react";

const Overlay: FC<{ pageName: string }> = ({ children, pageName }) => {
  return (
    <div className="col-12 container-fluid full-height bg-dark text-light d-flex flex-column align-items-center">
      <div className="col-md-3 display-1 text-center py-5">{pageName}</div>
      {children}
    </div>
  );
};

export default Overlay;
