import article1 from "./article1.png";
import article2 from "./article2.png";
import article3 from "./article3.png";
import recommendedProductImage1_1 from "./recommendedProductImage1_1.png";
import recommendedProductImage1_2 from "./recommendedProductImage1_2.png";
import recommendedProductImage1_3 from "./recommendedProductImage1_3.png";
import recommendedProductImage1_4 from "./recommendedProductImage1_4.png";
import recommendedProductImage2_1 from "./recommendedProductImage2_1.png";
import recommendedProductImage2_2 from "./recommendedProductImage2_2.png";
import recommendedProductImage2_3 from "./recommendedProductImage2_3.png";
import recommendedProductImage2_4 from "./recommendedProductImage2_4.png";
import { PiCatThin, PiFishSimpleThin, PiCakeThin, PiSprayBottleThin, PiToiletThin, PiPillThin, PiBathtubThin, PiGameControllerThin, PiBowlSteamThin, PiCastleTurretThin, PiHouseLineThin, PiBagThin } from "react-icons/pi";

const MEMBERSONLY = {
  joinMembership: "회원가입",
  logIn: "로그인",
  customerService: "고객센터"
}

const CUSTOMERSERVICE = [
  "공지사항",
  "자주하는 질문",
  "1:1 문의",
  "대량주문 문의"
]

const HEADER = {
  menu1: "마켓냥냥",
  menu2: "뷰티냥냥"
}

const MENULIST = [
  {name: "신상품"},
  {name: "베스트"},
  {name: "알뜰쇼핑"},
  {name: "특가/혜택"}
]

const CATEGORY_DROP_DOWN_MENU = [{
  name: "세계 고양이의 날",
  img: <PiCatThin className="text_rose_400"/>,
  submenu: [
    {name: "실시간 BEST"},
    {name: "뷰티"},
    {name: "건강식품"},
    {name: "간식"},
    {name: "장난감"},
    {name: "고양이 선물"},
    {name: "집사님 선물"}
  ]
}, {
  name: "사료",
  img: <PiFishSimpleThin />,
  submenu: [
    {name: "전연령용"},
    {name: "자묘용"},
    {name: "성묘용"},
    {name: "노묘용"},
    {name: "분유용"}
  ]
}, {
  name: "캔/간식",
  img: <PiCakeThin />,
  submenu: [
    {name: "주식캔"},
    {name: "간식캔"},
    {name: "주식 파우치"},
    {name: "간식 파우치"},
    {name: "통살"},
    {name: "스낵"},
    {name: "건조 간식"},
    {name: "캣닢/마따따비"},
    {name: "캣그라스"},
    {name: "저키스틱"},
    {name: "음료"},
    {name: "소시지"}
  ]
}, {
  name: "모래/탈취제",
  img: <PiSprayBottleThin />,
  submenu: [
    {name: "응고형 벤토나이트"},
    {name: "응고형 천연"},
    {name: "흡수형 실리카겔"},
    {name: "흡수형 천연"},
    {name: "모래탈취제"},
    {name: "소독/탈취제"}
  ]
}, {
  name: "화장실/매트",
  img: <PiToiletThin />,
  submenu: [
    {name: "평판화장실"},
    {name: "자동화장실"},
    {name: "거름망"},
    {name: "화장실매트"},
    {name: "모래탈취제"},
    {name: "모래삽"},
    {name: "분변처리"},
    {name: "배변패드"}
  ]
}, {
  name: "건강관리",
  img: <PiPillThin />,
  submenu: [
    {name: "치아"},
    {name: "종합영양"},
    {name: "유산기/소화기"},
    {name: "엘라이신/호흡기"},
    {name: "헤어볼"},
    {name: "피부/피모"},
    {name: "눈"},
    {name: "귀"},
    {name: "면역증강"},
    {name: "오일보조제"},
    {name: "심장/심신안정"},
    {name: "뼈/관절"},
    {name: "신장/요로"},
    {name: "해충방지"},
    {name: "알약디스펜서"}
  ]
}, {
  name: "목욕/미용",
  img: <PiBathtubThin />,
  submenu: [
    {name: "샴푸/린스"},
    {name: "목욕용품"},
    {name: "브러쉬/빗"},
    {name: "발톱관리"},
    {name: "물티슈"},
    {name: "털제거용품"},
    {name: "클리퍼/미용가위"}
  ]
}, {
  name: "장난감",
  img: <PiGameControllerThin />,
  submenu: [
    {name: "낚싯대"},
    {name: "막대"},
    {name: "인형/쿠션"},
    {name: "공"},
    {name: "터널/놀이터"},
    {name: "박스/하우스"},
    {name: "레이저/자동"},
    {name: "트릿퍼즐"}
  ]
}, {
  name: "식기",
  img: <PiBowlSteamThin />,
  submenu: [
    {name: "식탁"},
    {name: "급식기"},
    {name: "자동급식기"},
    {name: "급수기/물병"},
    {name: "정수기/필터"},
    {name: "사료보관통/스푼"},
    {name: "젖병"},
    {name: "기타"}
  ]
}, {
  name: "스크래쳐/캣타워",
  img: <PiCastleTurretThin />,
  submenu: [
    {name: "소형 캣타워"},
    {name: "중형 캣타워"},
    {name: "대형 캣타워"},
    {name: "캣폴/캣휠"},
    {name: "월/포스트 스크래쳐"},
    {name: "원/박스 스크래쳐"},
    {name: "소파 스크래쳐"},
    {name: "하우스 스크래쳐"},
    {name: "로프/리필"}
  ]
}, {
  name: "하우스/쿠션",
  img: <PiHouseLineThin />,
  submenu: [
    {name: "동굴형"},
    {name: "방석/쿠션"},
    {name: "해먹/침대"},
    {name: "매트"},
    {name: "원목하우스"},
    {name: "케이지"}
  ]
}, {
  name: "이동장/하네스",
  img: <PiBagThin />,
  submenu: [
    {name: "이동장"},
    {name: "이동가방"},
    {name: "백팩"},
    {name: "매트"},
    {name: "유모차"},
    {name: "하네스"}
  ]
}
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

const RECOMMENDED_PRODUCT_TITLE = {
  title: "😻세계 고양이의 날 임박! 간식 랭킹😻",
  subTitle: "놓치지 말고 지금 주문하세요!"
}

const RECOMMENDED_PRODUCT_CONTENTS = [{
  name: "recommendedProductImage1_1",
  url: recommendedProductImage1_1,
  alt: "소프트릿 고양이 초미니 동결건조 트릿",
  productName: "[소프트릿] 고양이 초미니 동결건조 트릿",
  regularPrice: "16,000원",
  discountRate: "7%",
  discountPrice: "14,900원"
}, {
  name: "recommendedProductImage1_2",
  url: recommendedProductImage1_2,
  alt: "찹앤찹 찹찹트릿 열빙어 30g",
  productName: "[찹앤찹] 찹찹트릿 열빙어 30g",
  regularPrice: "5,500원",
  discountRate: "10%",
  discountPrice: "4,400원"
}, {
  name: "recommendedProductImage1_3",
  url: recommendedProductImage1_3,
  alt: "냥쌤 캣 레시피 육즙가득 촉촉한 통살 닭 안심(10개입)",
  productName: "[냥쌤] 캣 레시피 육즙가득 촉촉한 통살 닭 안심(10개입)",
  regularPrice: "17,000원",
  discountRate: "36%",
  discountPrice: "10,900원"
}, {
  name: "recommendedProductImage1_4",
  url: recommendedProductImage1_4,
  alt: "냥쌤 교감트릿 49g 3종 set (이뮨/헤어볼케어/릴렉스)",
  productName: "[냥쌤] 교감트릿 49g 3종 set (이뮨/헤어볼케어/릴렉스)",
  regularPrice: "23,700원",
  discountRate: "51%",
  discountPrice: "11,700원"
}
]

const RECOMMENDED_PRODUCT_TITLE2 = {
  title: "모든 고양이가 좋아하는 추천 모래💖",
  subTitle: "특가로 만나는 벤토나이트"
}

const RECOMMENDED_PRODUCT_CONTENTS2 =[{
  name: "recommendedProductImage2_1",
  url: recommendedProductImage2_1,
  alt: "가또블랑코 벤토나이트 고양이모래 더스트제로 (6kg/2개입)",
  productName: "[가또블랑코] 벤토나이트 고양이모래 더스트제로 6kg 2개",
  regularPrice: "46,800원",
  discountRate: "50%",
  discountPrice: "46,800원"
}, {
  name: "recommendedProductImage2_2",
  url: recommendedProductImage2_2,
  alt: "페스룸 더스트 프리 벤토나이트 오리지널 (6kg/1개입)",
  productName: "[페스룸] 더스트 프리 벤토나이트 오리지널 (6kg/1개입)",
  regularPrice: "29,900원",
  discountRate: "30%",
  discountPrice: "20,900원"
}, {
  name: "recommendedProductImage2_3",
  url: recommendedProductImage2_3,
  alt: "앤샌드 벤토나이트 고양이모래 (6kg/2개입)",
  productName: "[앤샌드] 벤토나이트 고양이모래 (6kg/2개입)",
  regularPrice: "46,800원",
  discountRate: "40%",
  discountPrice: "28,080원"
}, {
  name: "recommendedProductImage2_4",
  url: recommendedProductImage2_4,
  alt: "아메리칸솔루션 라이트 벤토나이트 고양이모래 (6kg/3개입)",
  productName: "[아메리칸솔루션] 라이트 벤토나이트 고양이모래 (6kg/3개입)",
  regularPrice: "53,800원",
  discountRate: "20%",
  discountPrice: "43,040원"
}
]

export {
  MEMBERSONLY,
  CUSTOMERSERVICE,
  HEADER,
  MENULIST,
  CATEGORY_DROP_DOWN_MENU,
  ARTICLE,
  RECOMMENDED_PRODUCT_TITLE,
  RECOMMENDED_PRODUCT_CONTENTS,
  RECOMMENDED_PRODUCT_TITLE2,
  RECOMMENDED_PRODUCT_CONTENTS2
};