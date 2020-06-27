import { Pane, Button, Text, BookIcon, MenuIcon, SearchInput, Popover, Menu, Position, Icon, Tab } from "evergreen-ui";
import Link from 'next/link'
import MENU from '../../constants/menu'
import MobilePopover from "./MobilePopover";

export default function Header(props) {
  return (
    <header className="p-3">
      <nav className="w-75 d-flex w-md-100 mx-auto">
        <Link href="/">
          <a className="text-decoration-none logo">WikiForest</a>
        </Link>
        <span className="flex-grow-1"></span>
        <MobilePopover />
        <span className="px-3 d-md-none">
          {MENU.map((item, index) => 
            <Link key={index} href={item.href || '#'}>
              <Button appearance="minimal" iconBefore={
                <Icon size={15} color={item.color} icon={item.icon} />
              } intent="none" className="header-item color-blue">
                <span style={{color: item.color, paddingLeft: '5px'}}>{item.name}</span>
              </Button>
            </Link>
          )}
        </span>
      </nav>
      <style jsx>{`
        .header-item {
          font-weight: bold;
          padding-left: 15px;
        }
      `}</style>
    </header>
  )
}
