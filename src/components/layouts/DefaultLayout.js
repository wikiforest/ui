import BlankLayout from "./BlankLayout";
import { Pane } from "evergreen-ui";
import Header from "../Header";

export default function DefaultLayout(props) {
  return (
    <BlankLayout>
      <Header />
      <Pane>
        { props.children }
      </Pane>
    </BlankLayout>
  )
}
