import { PATH } from "./common";

export const breadcrumbNameMap: { [key: string]: string } = {
  /* User name map */
  [PATH.USER]: "고객관리", // User Management
  [PATH.USER_LIST]: "회원관리", // User List
  [PATH.SEND_MAIL]: "회원 이메일 발송",
  [PATH.INQUIRY_MANAGEMENT]: "문의관리",

  /* Content name map */
  [PATH.CONTENT]: "콘텐츠 관리",
  [PATH.CONTENT_LIST]: "콘텐츠 블로그",

  /* Community name map */
  [PATH.COMMUNITY]: "콘텐츠 관리",
  [PATH.EVENT_SUPPORT_PROJECT]: "교육행사/지원사업",
  [PATH.TALENT]: "인재풀 관리",
  [PATH.TEAM_BUILDING]: "팀빌딩 관리",
  [PATH.OUTSOURCING_MANAGEMENT]: "외주기업 관리",
  [PATH.STARTUP_QNA]: "스타트업 Q&A 관리",
  // [PATH.ADD_USER]: 'Add User',
  // [PATH.ORDER]: 'Order Management',
  // [PATH.AI]: 'AI Module',
  // [PATH.HELP]: 'Customer Services',
  // [PATH.HELP_FAQ]: 'FAQ',
  // [PATH.HELP_INQUIRY]: '1:1 Inquiry',
};
