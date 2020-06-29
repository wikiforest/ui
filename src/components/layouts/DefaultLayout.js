import BlankLayout from "./BlankLayout";
import { Pane } from "evergreen-ui";
import Header from "../Header";

export default function DefaultLayout(props) {
  const { billboard = false } = props
  return (
    <BlankLayout>
      <Header billboard={billboard} />
      <Pane className="bg-light">
        <Pane className="w-75 w-md-100 m-auto">
          { props.children }
        </Pane>
      </Pane>
    </BlankLayout>
  )
}
