import { vendor_footerlinks } from "../../constants";
import { Link } from "react-router-dom";

const SideBarFooterLinks = () => {
  return (
    <div className="border my-3">
      {vendor_footerlinks.map((item) => {
        return (
          <Link
            key={item.title}
            to={item.href}
            className="py-3 px-4 rounded-[4px] bg-fysi-green/10 block border"
          >
            <li className="text-white flex items-center gap-x-3">
              <div>
                <item.icon color="white" />
              </div>
              {item.title}
            </li>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarFooterLinks;
