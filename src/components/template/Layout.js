import { IO } from "../atoms/IO"
import { Header } from "../organisms/Header"
import { LeftMenu } from "../organisms/LeftMemu"
import { Drawer } from "../molecules/Drawer"
// import { Helmet } from "react-helmet"

export const Layout = ({ children }) => {
    return (
        <Drawer>
            {/* <Helmet>
                <title>ページのタイトル</title>
            </Helmet> */}
            <div className="w-full">
                <div className='m-auto flex flex-wrap'>
                    <Header/>
                    <LeftMenu/>
                    <main className='min-h-[200vh] w-full md:w-[calc(100%-300px)]'>{children}</main>
                </div>
            </div>
            <footer><IO as='p' c_name='aaa'>test</IO></footer>
        </Drawer>
    )
}

