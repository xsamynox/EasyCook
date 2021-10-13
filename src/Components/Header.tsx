import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full flex justify-center shadow-md  mb-3">
        <div className=" relative max-w-xl">
          <Link to='/login'>
            <Icon className="absolute top-1/3 -left-10 hover:shadow" icon="dashicons:arrow-left-alt2" width="30" />
          </Link>
          <div className="flex justify-between py-4">
            <Link className="w-3/6 h-1/3" to="/">
              <Logo className="w-3/12 h-1/3" width="100%" />
            </Link>
            <div className="flex items-center gap-5">
              <Link to="/post">
                <Icon icon="akar-icons:plus" width="20" />
              </Link>
              <Link to="/filter">
                <Icon icon="mi:filter" width="25" />
              </Link>
              <Link to="/search">
                <Icon icon="bx:bx-search" width="25" />
              </Link>
              <Link to="/profile">
                <Icon icon="carbon:user-avatar-filled-alt" width="25" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
