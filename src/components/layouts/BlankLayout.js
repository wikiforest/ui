import { Pane } from "evergreen-ui";

export default function BlankLayout(props) {
  return (
    <Pane padding="0" clearfix>
      { props.children }
    </Pane>
  )
}
