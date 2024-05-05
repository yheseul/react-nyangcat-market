import { useState } from "react";
import { CATEGORY_DROP_DOWN_MENU } from "./Data";
import { FiMenu } from "react-icons/fi";

export default function Menu({ menuLists }) {
  const lis = [];

  menuLists.forEach((menuList) => {
    if(menuList.name === "카테고리") {
      lis.push(
        <CategoryMenu
          category={menuList.name}
          key={menuList.name}/>
      );
    }
    if(menuList.name !== "카테고리") {
      lis.push(
        <MenuList
          menu={menuList.name}
          key={menuList.name}/>
      );
    }
  });

  return(
    <nav className="bg-inherit py-4">
      <ul className="inline-flex text-base">{lis}</ul>
    </nav>
  )
}

function CategoryMenu({ category }) {
  const [isDropDownMenuVisible, setDropDownMenuVisible] = useState(false);

  const handleMouseOver = () => setDropDownMenuVisible(true);
  const handleMouseOut = () => setDropDownMenuVisible(false);

  return(
    <li
      className="relative flex font-semibold hover:text-blue-500"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <FiMenu className="mr-1 mt-1"/>
      <span>{category}</span>
      {isDropDownMenuVisible && (
        <div className="absolute top-full w-60 left-0 bg-white shadow-md z-[100] border">
          <CategoryDropDownMenu
            categoryDropDownMenu={CATEGORY_DROP_DOWN_MENU}/>
        </div>
        )}
    </li>
  )
}

function CategoryDropDownMenu({ categoryDropDownMenu }) {
  const lis = [];

  categoryDropDownMenu.forEach((list) =>{
    lis.push(
      <li className="hover:bg-slate-100 hover:text-blue-500 flex font-normal text-slate-950 py-1.5 px-4">
      <span className="pr-1 text-2xl">{list.img}</span>
      <span>{list.name}</span>
      </li>
    )
  })

  return(
    <ul>{lis}</ul>
  )
}

function MenuList({ menu }) {
  return(
    <li className="ml-20 font-semibold hover:text-blue-500 hover:underline">{menu}</li>
  )
}