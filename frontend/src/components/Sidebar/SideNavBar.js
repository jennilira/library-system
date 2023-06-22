// import { ReactComponent as Brand } from ''
import "./SideNavBar.css";
// import { AiOutlineMenu } from "react-icons/ai";
import { TbFileExport } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiBookAdd, BiBook } from "react-icons/bi";
import { VscNewFile } from "react-icons/vsc";
import { AiOutlineException } from "react-icons/ai";
// import { FiXCircle } from "react-icons/fi";
// import { MdShoppingCartCheckout  } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      text: "principal",
      icon: <BiHomeAlt2 className="icons" />,
      path: "/",
    },
    {
      text: "novo livro",
      icon: <BiBookAdd className="icons" />,
      path: "/addlivro",
    },
    {
      text: "livros",
      icon: <BiBook className="icons" />,
      path: "/livros",
    },
    // {
    //   text: "exemplares",
    //   icon: <BiBook className="icons" />,
    //   path: "/exemplares",
    // },
    // {
    //   text: "livros alugados",
    //   icon: <AiOutlineException className="icons" />,
    //   path: "/livrosalugados",
    // },
    {
      text: "livros alugados",
      icon: <AiOutlineException className="icons" />,
      path: "/livroatrasados",
    },

    // {
    //   text: "importar livros",
    //   icon: <TbFileExport className="icons" />,
    //   path: "/importarlivros",
    // },
    // {
    //   text: "Nova Categoria",
    //   icon: <VscNewFile className="icons" />,
    //   path: "/categoria",
    // },

    {
      text: "novo administrador ",
      icon: <AiOutlineUserAdd className="icons" />,
      path: "/adm",
    },
    {
      text: "Sair ",
      icon: <FiLogOut className="icons" />,
      path: "/dashboard",
    },
  ];

  return (
    <div className="nav-upper">
      <div className="container-nav">
        <div className="nav">
          <div className="">
            <div className="">
              <div className="butao"></div>

              <div className="nav-brand">
                {/* <MdShoppingCartCheckout size={32} /> */}

                {/* <img  alt=' '  src='../../img/Brasao.png '   /> */}
                <img
                  src={require("../../assets/img/Brasao.png")}
                  alt=" "
                  className="logo"
                />
              </div>
            </div>
            <div className="nav-menu">
              {menuItems?.map((route) => (
                <Link className={"menu-item"} to={route.path}>
                  {route?.icon}
                  <p>{route?.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <hr /> */}
        {/* <div className="nav-footer">
          {menuItems.map((route) => (
            <Link
              className={isExpanded ? "menu-item-footer" : "menu-item menu-item-NX-"}
              to={route.path}
            >
              {route.icon}
              {isExpanded && <p>{route.text}</p>}
            </Link>
          ))}
          
        </div> */}
      </div>

      {/* <div className="footer-nav">
     <  CiLogout/>
       </div> */}
    </div>
  );
};
// é so mudar umas coisas bem estranhas sabe
export default Sidebar;
