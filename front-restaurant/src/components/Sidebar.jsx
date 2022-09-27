import React from 'react'
import * as FaIcons from "react-icons/fa" 
import * as AiIcons from "react-icons/ai" 
import * as IoIcons from "react-icons/io" 

export const SidebarData = [
    {
      title: "Clientes",
      path: "/cajero/clientes",
      icon: <FaIcons.FaUserAlt/>,
      cName: 'nav-text'
    },
    {
      title: "Facturacion",
      path: "/cajero/facturacion",
      icon: <FaIcons.FaFileAlt/>,
      cName: 'nav-text'
    },
    {
        title: "Informes",
        path: "/cajero/informes",
        icon: <FaIcons.FaFileInvoice/>,
        cName: 'nav-text'
    },
    {
        title: "Configuracion",
        path: "/cajero/configuracion",
        icon: <FaIcons.FaCog/>,
        cName: 'nav-text'
    },
]
/* 
export default class Sidebar extends Component {
  render() {
    return (
      <>

      </>
    )
  }
}
 */