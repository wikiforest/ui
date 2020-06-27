import { Pane } from "evergreen-ui";

export default function BlankLayout(props) {
  return (
    <Pane padding="0" clearfix background="tint2" borderRadius={3}>
      { props.children }
    </Pane>
  )
}
