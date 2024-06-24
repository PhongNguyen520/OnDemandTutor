import config from '~/config';

import Home from '~/pages/Home';
import Blog from '~/pages/Blog';
import Tutor from '~/pages/Tutor';
import Student from '~/pages/Student';
import AboutUs from '~/pages/AboutUs';
import Payment from '~/pages/Pay';
import History from '~/pages/History';
import HowItWork from '~/pages/HowItWork';
import ForStudent from '~/pages/ForStudent';
import Transaction from '~/layouts/components/Transaction';
import HeaderOnly from '~/layouts/components/HeaderOnly';
import CustomerSay from '~/pages/CustomerSay';
import FindTutor from '~/pages/SearchForTutor';
import RequestTutor from '~/pages/RequestTutor';
import Registration from '~/components/Registration';
import Advertisement from '~/pages/Advertisement';
import OnlineTutoring from '~/pages/OnlineTutoring';
import BecomeTutor from '~/pages/BecomeTutor';
import BecomeStudent from '~/pages/BecomeStudent';
import LearnMore from '~/pages/LearnMore';
import TipSuccess from '~/pages/TipSuccess';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.main, component: Main },
    { path: config.routes.registrationTutor1, component: BecomeTutor, layout: Registration },
    { path: config.routes.registrationTutor2, component: BecomeTutor2, layout: Registration },
    { path: config.routes.registrationStudent1, component: BecomeStudent, layout: Registration },
    { path: config.routes.registrationStudent2, component: BecomeStudent, layout: Registration },
    { path: config.routes.findTutor, component: FindTutor },
    { path: config.routes.account, component: Tutor },
    { path: config.routes.requestTutor, component: RequestTutor },
    { path: config.routes.onlineTutoring, component: OnlineTutoring },
    { path: config.routes.forStudent, component: ForStudent },
    { path: config.routes.customerSay, component: CustomerSay },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.advertisement, component: Advertisement },
    { path: config.routes.howItWork, component: HowItWork },
    { path: config.routes.accountStudent, component: Student, layout: HeaderOnly },
    { path: config.routes.aboutUs, component: AboutUs },
    { path: config.routes.learnMore, component: LearnMore },
    { path: config.routes.transaction, component: Transaction },
    { path: config.routes.payment, component: Payment, layout: Transaction },
    { path: config.routes.history, component: History, layout: Transaction },
    { path: config.routes.tipSuccess, component: TipSuccess },
    { path: config.routes.dashboardTutor, component: DashboardTutor },
    { path: config.routes.feedbackHistory, component: FeedbackHistory },
];

const privateRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.main, component: Main },
    { path: config.routes.registrationTutor1, component: BecomeTutor, layout: Registration },
    { path: config.routes.registrationTutor2, component: BecomeTutor2, layout: Registration },
    { path: config.routes.registrationStudent1, component: BecomeStudent, layout: Registration },
    { path: config.routes.registrationStudent2, component: BecomeStudent, layout: Registration },
    { path: config.routes.findTutor, component: FindTutor },
    { path: config.routes.account, component: Tutor },
    { path: config.routes.requestTutor, component: RequestTutor },
    { path: config.routes.onlineTutoring, component: OnlineTutoring },
    { path: config.routes.forStudent, component: ForStudent },
    { path: config.routes.customerSay, component: CustomerSay },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.advertisement, component: Advertisement },
    { path: config.routes.howItWork, component: HowItWork },
    { path: config.routes.accountStudent, component: Student, layout: HeaderOnly },
    { path: config.routes.aboutUs, component: AboutUs },
    { path: config.routes.learnMore, component: LearnMore },
    { path: config.routes.transaction, component: Transaction },
    { path: config.routes.payment, component: Payment, layout: Transaction },
    { path: config.routes.history, component: History, layout: Transaction },
    { path: config.routes.tipSuccess, component: TipSuccess },
];

export { publicRoutes, privateRoutes };
