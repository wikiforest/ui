import { Pane, Button, Text, BookIcon, MenuIcon, SearchInput, Popover, Menu, Position, Icon, Tab } from "evergreen-ui";
import Link from 'next/link'
import MENU from '../../constants/menu'
import MobilePopover from "./MobilePopover";

export default function Header() {
  return (
    <>
      <header className="p-3 bg-dark">
        <nav className="w-75 w-md-100 mx-auto">
          <div className="px-3 text-center">
            <Link href="#">
                <a className="text-light font-weight-bold">认识世界，也让世界认识你。</a>
            </Link>
          </div>
        </nav>
      </header>
      <header className="p-3 bg-white border-bottom">
        <nav className="w-75 d-flex w-md-100 mx-auto">
          <Link href="/">
            <a className="text-decoration-none logo">Wiki</a>
          </Link>
          <div className="px-3 d-md-none">
            {MENU.map((item, index) => 
              <Link key={index} href={item.href || '#'}>
                <Button size="500" appearance="minimal" intent="none">
                  <div className="header-item text-mute">{item.name}</div>
                </Button>
              </Link>
            )}
          </div>
          <div className="flex-grow-1"></div>
          <div className="px-3 d-md-none">
            <Button marginRight={5} iconBefore="log-in" intent="none">注册</Button>
            <Button appearance="primary" iconBefore="user" intent="none">登录</Button>
          </div>
          <MobilePopover />
        </nav>
        <style jsx>{`
          .header-item:hover {
            color: #2a7ae2;
          }
        `}</style>
      </header>
      </>
  )
}
