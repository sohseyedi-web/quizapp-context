import { v4 as uuidv4 } from "uuid";


export const questions = [
  {
    id: uuidv4(),
    path: "football",
    title: "فوتبال",
    items : [
      {
        prompt: "تعداد قهرمانی ایران در جام ملتهای آسیا؟",
        optionA: "3",
        optionB: "1",
        optionC: "2",
        optionD: "5",
        answer: "optionA",
      },
      {
        prompt: "قهرمان جام جهانی 2010",
        optionA: "ایران",
        optionB: "آمریکا",
        optionC: "برزیل",
        optionD: "اسپانیا",
        answer: "optionD",
      },
      {
        prompt: "نام ورزشگاه ملی انگلیس؟",
        optionA: "ومبلی",
        optionB: "نیوکمپ",
        optionC: "ملکه",
        optionD: "سن سیرو",
        answer: "optionA",
      },
    ]
  },
  {
    id: uuidv4(),
    path: "tech",
    title: "تکنولوژی",
    items : [
      {
        prompt: "مدیرعامل اپل؟",
        optionA: "استیو جابز",
        optionB: "تیم کوک",
        optionC: "ایلان ماسک",
        optionD: "بیل گیتس",
        answer: "optionA",
      },
      {
        prompt: "اولین سری ویندوز در چه تاریخی انتشار یافت؟",
        optionA: "2000",
        optionB: "2001",
        optionC: "1985",
        optionD: "1987",
        answer: "optionC",
      },
      {
        prompt: "پر فروش ترین گوشی تاریخ",
        optionA: "نوکیا 1200",
        optionB: "ال جی جی 2",
        optionC: "ایفون 5",
        optionD: "نوکیا 1100",
        answer: "optionD",
      },
    ]
  },
  {
    id: uuidv4(),
    path: "political",
    title: "سیاسی",
    items : [
      {
        prompt: "اولین رییس جمهور بعد از انقلاب؟",
        optionA: "احمدی نژاد",
        optionB: "موسوی",
        optionC: "رجایی",
        optionD: "بنی صدر",
        answer: "optionD",
      },
      {
        prompt: "شروع مشروطه در کدام دوران بود",
        optionA: "قاجار",
        optionB: "پهلوی",
        optionC: "زندیه",
        optionD: "هیچکدام",
        answer: "optionA",
      },
      {
        prompt: "اخرین سلسله پادشاهی قبل حمله اعراب",
        optionA: "افشاریه",
        optionB: "سلجوقیان",
        optionC: "اشکانیان",
        optionD: "ساسانیان",
        answer: "optionD",
      },
    ]
  },
  {
    id: uuidv4(),
    path: "fun",
    title: "سرگرمی",
    items : [
      {
        prompt: "کدام گزینه تولید کننده موبایل میباشد",
        optionA: "Kiwi",
        optionB: "Orange",
        optionC: "Banana",
        optionD: "Apple",
        answer: "optionD",
      },
      {
        prompt: "اول مرغ بود یا تخم مرغ",
        optionA: "مرغ",
        optionB: "تخم مرغ",
        optionC: "دوتا",
        optionD: "هیچکدام",
        answer: "optionA",
      },
      {
        prompt: "(1+7+7-6*25+12) x 0?",
        optionA: "560",
        optionB: "1240",
        optionC: "0",
        optionD: "11",
        answer: "optionC",
      },
    ]
  },
  {
    id: uuidv4(),
    path: "general",
    title: "اطلاعات عمومی",
    items : [
      {
        prompt: "پر جمعیت ترین قاره جهان؟",
        optionA: "آمریکا",
        optionB: "آسیا",
        optionC: "اروپا",
        optionD: "آفریقا",
        answer: "optionB",
      },
      {
        prompt: "کدام یک زبان برنامه نویسی نیست؟",
        optionA: "Python",
        optionB: "JavaScript",
        optionC: "MC-03",
        optionD: "Java",
        answer: "optionC",
      },
      {
        prompt: "کارگردان فیلم راکی؟",
        optionA: "استیون اسپیلبرگ",
        optionB: "جان جی آویلدسن ",
        optionC: "سیلوراستالونه",
        optionD: "هیچکدام",
        answer: "optionB",
      },
    ]
  },
  {
    id: uuidv4(),
    path: "historical",
    title: "تاریخ",
    items : [
      {
        prompt: "موسس سلسله قاجار؟",
        optionA: "ناصرالدین شاه",
        optionB: "آغا محمد خان",
        optionC: "کریم خان",
        optionD: "هیچکدام",
        answer: "optionB",
      },
      {
        prompt: "جنگ جهانی دوم چند سال بود",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        optionD: "1",
        answer: "optionC",
      },
      {
        prompt: "فاتح هندوستان؟",
        optionA: "من",
        optionB: "شاهرخ خان",
        optionC: "کریم خان زند",
        optionD: "نادرشاه افشار",
        answer: "optionD",
      },
    ]
  },
];
