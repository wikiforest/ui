import { Menu, Popover, Button, Position, LayoutGridIcon, SearchInput } from "evergreen-ui";
import MENU from "../../constants/menu";
import { useRouter } from 'next/router'

export default function MobilePopover() {
  const router = useRouter()
  const handleSelect = href => {
    return event => {
      event.preventDefault()
      router.push(href)
    }
  }
  return (
    <Popover
      position={Position.BOTTOM_LEFT}
      content={
        <Menu>
          <Menu.Group title="站点导航">
            {MENU.map((item, index) => 
              <Menu.Item key={index} onSelect={handleSelect(item.href)} style={{color: item.color}} icon={item.icon}>
                <a className="text-decoration-none header-item color-blue">
                  {item.name}
                </a>
              </Menu.Item>
            )}
            <Menu.Item intent="none">
              <SearchInput className="bg-light" width="200px" appearance="none" placeholder="搜一搜" />
            </Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group title="会话">
            <Menu.Item icon="user" intent="none">注册</Menu.Item>
            <Menu.Item icon="log-in" intent="none">登录</Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button appearance="minimal" className="meta-size d-none d-md-inline-block"><LayoutGridIcon /></Button>
    </Popover>
  )
}
