import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { cn } from "../../utils/cn-merge";
// import { cn } from "@/utils";

const Footer = ({ hideLinks }) => {
  return (
    <footer
      className={cn(
        "absolute w-full border-t border-default-200 p-6 hide-in-print",
        "ps-64"
      )}
    >
      <div className={cn("container", hideLinks && "ms-2")}>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <p className="text-default-600">
            Designed, crafted and coded with{" "}
            <LuHeart size={16} className="inline fill-red-500 text-red-500" />{" "}
            by Coderthemes.com
          </p>

         

        </div>
      </div>
    </footer>
  );
};

export default Footer;
