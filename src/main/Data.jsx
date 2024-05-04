import article1 from "./article1.png";
import article2 from "./article2.png";
import article3 from "./article3.png";
import { PiCatThin, PiFishSimpleThin, PiCakeThin, PiSprayBottleThin, PiToiletThin, PiPillThin, PiBathtubThin, PiGameControllerThin, PiBowlSteamThin, PiCastleTurretThin, PiHouseLineThin, PiBagThin } from "react-icons/pi";

const MEMBERSONLY = {
  joinMembership: "회원가입",
  logIn: "로그인",
  customerService: "고객센터"
}

const HEADER = {
  menu1: "마켓냥냥",
  menu2: "뷰티냥냥"
}

const MENULIST = [
  {name: "카테고리"},
  {name: "신상품"},
  {name: "베스트"},
  {name: "알뜰쇼핑"},
  {name: "특가/혜택"}
]

const CATEGORY_DROP_DOWN_MENU = [
  {name: "세계 고양이의 날", img: <PiCatThin className="text-rose-400"/>},
  {name: "사료", img: <PiFishSimpleThin />},
  {name: "캔/간식", img: <PiCakeThin />},
  {name: "모래/탈취제", img: <PiSprayBottleThin />},
  {name: "화장실/매트", img: <PiToiletThin />},
  {name: "건강관리", img: <PiPillThin />},
  {name: "목욕/미용", img: <PiBathtubThin />},
  {name: "장난감", img: <PiGameControllerThin />},
  {name: "식기", img: <PiBowlSteamThin />},
  {name: "스크래쳐/캣타워", img: <PiCastleTurretThin />},
  {name: "하우스/쿠션", img: <PiHouseLineThin />},
  {name: "이동장/하네스", img: <PiBagThin />}
]

const ARTICLE = [{
  name: "article1",
  url: article1,
  alt: "article1"
}, {
  name: "article2",
  url: article2,
  alt: "article2"
}, {
  name: "article3",
  url: article3,
  alt: "article3"
}
]

export { MENULIST, HEADER, ARTICLE, MEMBERSONLY, CATEGORY_DROP_DOWN_MENU };