import {
  CalendarDays,
  GraduationCap,
  HandCoins,
  House,
  Landmark,
  MapPin,
} from "lucide-react";

// Quick-start topics shown as cards on the home screen.
export const topics = [
  {
    id: "admission",
    icon: GraduationCap,
    title: "การรับสมัคร",
    question: "การรับสมัคร TCAS ของธรรมศาสตร์มีรอบอะไรบ้าง?",
  },
  {
    id: "faculties",
    icon: Landmark,
    title: "คณะและหลักสูตร",
    question: "ธรรมศาสตร์มีคณะอะไรบ้าง?",
  },
  {
    id: "scholarships",
    icon: HandCoins,
    title: "ทุนการศึกษา",
    question: "มีทุนการศึกษาอะไรให้สมัครบ้าง?",
  },
  {
    id: "campuses",
    icon: MapPin,
    title: "วิทยาเขต",
    question: "ธรรมศาสตร์มีกี่วิทยาเขต อยู่ที่ไหนบ้าง?",
  },
  {
    id: "dormitory",
    icon: House,
    title: "หอพัก",
    question: "การสมัครหอพักในมหาวิทยาลัยทำอย่างไร?",
  },
  {
    id: "calendar",
    icon: CalendarDays,
    title: "ปฏิทินการศึกษา",
    question: "ปฏิทินการศึกษาปีนี้เปิดเทอมเมื่อไหร่?",
  },
];
