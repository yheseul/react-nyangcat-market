import { useState } from "react";
import { MENULIST }  from "./Data";
import { CATEGORY_DROP_DOWN_MENU } from "./Data";
import { FiMenu } from "react-icons/fi";

export default function Navigation() {
  return(
    <div className="navigationWrap">
      <div className="navigation">
        <CategoryMenu />
        <NavigationMenu 
          menuLists={MENULIST}
        />
        <OneDayDeliveryInformation />
      </div>
    </div>
  )
}

function CategoryMenu() {
  const [isDropDownMenuVisible, setDropDownMenuVisible] = useState(false);

  const handleMouseOver = () => setDropDownMenuVisible(true);
  const handleMouseOut = () => setDropDownMenuVisible(false);

  return(
    <div
      className="categoryMenuWrap"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="categoryMenu">
        <FiMenu className="categoryMenuImage"/>
        <span className="categoryMenuText">카테고리</span>
        {isDropDownMenuVisible && (
          <div className="multiDropDownMenu">
            <MultiDropDownMenu 
            menuItems={CATEGORY_DROP_DOWN_MENU}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function MultiDropDownMenu({ menuItems }){
  const [currnetItem, setCurrentItem] = useState(null);

  const handleMouseOver = (item) =>{
    setCurrentItem(item);
  }

  const handleMouseOut = () => {
    setCurrentItem(null);
  }

  return(
    <div>
      <ul>
        {menuItems.map((item) => (
          <li
            className="categoryDropDownMenuList"
            key={item.name}
            onMouseOver={() => handleMouseOver(item)}
            onMouseOut={handleMouseOut}
          >
            <span className="categoryDropDownMenuListImage">{item.img}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      {currnetItem && (
        <div className="categoryMultiDropDownMenu">
          <ul>
            {currnetItem.submenu.map((subItem) => (
              <li className="categoryMultiDropDownMenuList">
                <span>{subItem.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function NavigationMenu({ menuLists }) {
  const lis = [];

  menuLists.forEach((menuList) => {
    lis.push(
      <MenuList
        menu={menuList.name}
        key={menuList.name}
      />
    )
  });

  return(
    <nav>
      <ul className="navigationMenu">{lis}</ul>
    </nav>
  )
}

function MenuList({ menu }) {
  return(
    <li className="navigationMenuListWrap">
      <span className="navigationMenuList ml-20 font-semibold hover:text-blue-500 hover:underline">{menu}</span>
    </li>
  )
}

function OneDayDeliveryInformation() {
  return(
    <div className="oneDayDeliveryInformationWrap">
      <div className="oneDayDeliveryInformation">
        <span className="oneDay">햇살·하루</span>
        배송안내
      </div>
    </div>
  )
}