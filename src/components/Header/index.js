import { Pane, Button, Text, BookIcon, MenuIcon, SearchInput, Popover, Menu, Position, Icon, Tab, Heading } from "evergreen-ui";
import Link from 'next/link'
import MENU from '../../constants/menu'
import MobilePopover from "./MobilePopover";
import { SITE_NAME } from "../../constants/site";
import { useRouter } from "next/router";

export default function Header(props) {
  const { billboard } = props
  const router = useRouter()
  const handleSelect = href => {
    return event => {
      event.preventDefault()
      router.push(href)
    }
  }
  return (
    <header>
      {billboard && <div className="p-3 bg-dark">
        <nav className="w-75 w-md-100 mx-auto">
          <div className="px-3 text-center">
            <Link href="#">
              <a className="text-light font-weight-bold">认识世界，也让世界认识你。</a>
            </Link>
          </div>
        </nav>
      </div>}
      <div className="p-3 bg-white border-bottom">
        <nav className="w-75 d-flex w-md-100 mx-auto">
          <Heading>
            <Link href="/">
              <a className="text-decoration-none logo">{SITE_NAME}</a>
            </Link>
          </Heading>
          <div className="px-3 d-md-none">
            {MENU.map((item, index) => 
              <Link key={index} href={item.href || '#'}>
                <Button size={500} appearance="minimal" intent="none">
                  <div style={{color: item.color}} className="header-item text-mute">{item.name}</div>
                </Button>
              </Link>
            )}
            <SearchInput className="bg-light ml-2" appearance="none" placeholder="搜一搜" />
          </div>
          <div className="flex-grow-1"></div>
          <div className="px-3 d-md-none">
            <Button onClick={handleSelect('/user/signup')} marginRight={5} iconBefore="user" intent="none">注册</Button>
            <Button appearance="primary" iconBefore="log-in" intent="none">登录</Button>
          </div>
          <MobilePopover />
        </nav>
        <style jsx>{`
          .header-item:hover {
            color: #2a7ae2;
          }
        `}</style>
      </div>
      </header>
  )
}
