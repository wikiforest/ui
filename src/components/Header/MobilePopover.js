import { Menu, Popover, Button, MenuIcon, Position } from "evergreen-ui";
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
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group title="destructive">
            <Menu.Item icon="log-out" intent="none">
              离开
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button appearance="minimal" className="meta-size d-none d-md-inline-block"><MenuIcon /></Button>
    </Popover>
  )
}
