import BlankLayout from "./BlankLayout";
import { Pane } from "evergreen-ui";
import Header from "../Header";

export default function DefaultLayout(props) {
  const { billboard = false, title = null } = props
  return (
    <BlankLayout title={title}>
      <Header billboard={billboard} />
      <Pane className="bg-light">
        <Pane className="w-70 w-md-100 m-auto">
          { props.children }
        </Pane>
      </Pane>
    </BlankLayout>
  )
}
