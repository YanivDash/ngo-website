import {
  banner1,
  banner2,
  banner3,
  banner4,
  aboutImg,
  rajmri,
  university,
} from "../assets";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

// subheader
export const social = [
  { icon: AiFillInstagram, link: "/" },
  {
    icon: FaFacebook,
    link: "/",
  },
  {
    icon: FaTwitter,
    link: "/",
  },
  {
    icon: FaYoutube,
    link: "/",
  },
];

// navbar
export const links = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "knowledge",
    link: "knowledge",
  },
];

// banner hero
export const banner = [
  {
    image: banner1,
    title: "Heading One",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: banner2,
    title: "Heading Two",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: banner3,
    title: "Heading Three",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: banner4,
    title: "Heading Four",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// about content
export const aboutData = [
  {
    image: aboutImg,
    title: "About us",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam amet ipsa ipsam fugit fuga veritatis distinctio quam, esse rationevel expedita sequi quos eos eius cupiditate excepturi! Error,  accusantium eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta sed veniam, voluptatem quas reiciendis soluta sequi iste. Id esse aspernatur voluptate voluptas sint animi sunt quod odio, facere optio.`,
    subContent: "",
  },
  {
    image: "",
    title: "FIF Health Care",
    content: `India’s healthcare industry comprises hospitals, medical devices and equipment, health insurance, clinical trials, telemedicine and medical tourism. The most emerging health category coming as Allied & Other Healthcare Professionals. The Paramedical and other allied healthcare professionals are vital in our journey to health and wellbeing along with the Doctors and eventual treatment.`,
    subContent: [
      [
        `There is an ever-increasing corresponding escalation of demand of Basic Life Support Equipped Ambulance Services and its proficient staff as they have a crucial role in saving lives. The management of essential and basic medical facilities in institutions, corporate and is also an ever increasing requisite. The dearth is real and the demand is ongoing as the human race thrives and survives on the ever-increasing need for quantity and quality of Medical facilities and related competent staff.`,
      ],
      ,
      [
        `These health professionals are technicians or technologists trained to perform any technical and practical task in supporting the diagnosis and treatment of illness, injury or impairment and support implementation of any health care as per the medical recommendation, nursing or any other health care professionals who has the requisite qualifications.`,
      ],
      [
        `Their expertise in supporting the Specialists, operating high tech instruments and machinery, handling patients appropriately, dealing with them safely and empathetically has a big role to play in the field of medicine and wholesome healthcare besides the Doctors and Surgeons who are at the further end of the route to cure.`,
      ],
      [
        `The research and advancement in the field of Medicine and related high-end technology and investigative techniques have created a huge demand in India and the world for well-trained Healthcare Professionals. The complexity of lives too has further intensified its need and scope for telemedicine technologies and in the corporate world for its personnel welfare as well as Corporate Social Responsibility. `,
      ],
    ],
  },
  {
    image: university,
    title: "why us",
    content: `FIF Healthcare center will trained the students by giving full practical exposure and degree by renowned university. We pre-dominantly focus on building the skills and working for the welfare of the society. Our training is specifically designed for these areas of awareness, development and global growth. We believe that a skilled person will have the ability to face any situation with courage, grace, logic and dignity. `,
    subContent: [
      `The mix of Academic and Technical excellence will enhance the student confidence, make them self-reliable, Independent and to outcome as skilled work force to contributes towards society and family need.`,
    ],
  },
];

export const courses = [
  {
    title: "Medical Laboratory Technology (MLT)",
    overview: `The Medical Laboratory Technology (MLT) program is designed to provide general education, natural
    science and medical laboratory science education courses necessary for entry-level professional
    preparation. Medical Laboratory Technicians perform laboratory tests used to diagnose, treat and
    monitor patients.`,
    carrer: `Phlebotomist >> Lab Coordinator >> Assistant in Hospital Labs >> Research & Development >> Medical
    Writing >> Lab-in-Charge >> Area head of Labs
    Entrepreneurship by opening their own lab or taking franchise`,
  },
  {
    title: "Radiology & Medical Imaging Technology (RMIT)",
    overview: [
      `Radiography is the science of producing medical images using x-radiation. Radiology uses medical
    imaging to diagnose, treat, and monitor various diseases. Medical imaging includes x-rays, ultrasound,
    computed tomography (CT), positron emission tomography (PET), and magnetic resonance imaging
    (MRI), providing a variety of specialization options for potential radiologists.`,
      `Technologists produce images for the radiologists interpretation to aid in medical diagnoses. The
    program prepares you, under the direction of a medical specialist (radiologist), to work in the hospital
    medical imaging department, at the patient's bedside, in the operating room or Emergency or in`,
    ],
    carrer: `Jr.RMI Technologist >> RMI Technologist >> Sr. RMI Technologist >> RMIT Technical officer >> RMIT
    Senior Technical officer >> RMIT CTO >> Chief Manager/ RMIT Head / Director - RMIT`,
  },
];
