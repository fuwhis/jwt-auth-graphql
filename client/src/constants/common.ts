//Constants
export const FONT_SIZE = {
  xs: 8,
  "2xs": 10,
  sm: 12,
  "2sm": 13,
  md: 14,
  "2md": 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 36,
};

export const FONT_WEIGHT = {
  sm: 200,
  md: 400,
  lg: 500,
  xl: 600,
  "2xl": 700,
};

//Enumes
export enum PATH {
  HOME = "/",
  DASHBOARD = "/dashboard",
  /* User path */
  USER = "/user",
  PROFILE = "/profile",
  REGISTER = "/register",
  USER_LIST = "user-list",
  DETAIL_USER = "detail/:id",
  SEND_MAIL = "send-mail",
  INQUIRY_MANAGEMENT = "inquiry-list",

  /* Content path */
  CONTENT = "/content",
  CONTENT_LIST = "content-list",
  REGISTER_CONTENT = "register-content",
  DETAIL_CONTENT = "detail/:type/:id",

  /* Community path */
  COMMUNITY = "/community",
  EVENT_SUPPORT_PROJECT = "event",
  EVENT_DETAIL = "event-detail/:id",
  TALENT = "talent",
  TALENT_DETAIL = "talent-detail/:id",
  TEAM_BUILDING = "team-building",
  OUTSOURCING_MANAGEMENT = "outsourcing",
  STARTUP_QNA = "start-up",

  BANNER = "/banner",
  TOOLKIT = "/toolkit",
  COUPON = "/coupon",
  PAYMENT = "/payment",
  LOGIN = "/login",

  /* BURNINGBROS TEST */
  PRODUCT = "/product",
}

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum CASE_TYPE {
  Schumpeter = "Schumpeter",
  OTHER = "other",
}

export enum CATE_TYPE {
  Content = "CONTENT",
  Event = "EVENT",
  Talent = "TALENT",
}
