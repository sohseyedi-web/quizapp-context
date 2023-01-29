import './Layout.scss'
import {questions} from "../../data/Data.js";
import {Link} from "react-router-dom";

const Layout = () => {
    return (
        <section className={"layout"}>
            <div className="container">
                <h5>به کوییز اپ خوش آمدید</h5>
                <p>با انتخاب یکی از دسته بندی ها مسابقه رو شروع کنید</p>
                <div className="layout-container">
                    {
                        questions.map((qu) => (
                            <Link to={`/${qu.path}`} key={qu.id} className={"layout-container__box"}>
                                {qu.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Layout