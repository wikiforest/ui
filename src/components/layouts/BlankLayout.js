import { Pane } from "evergreen-ui";
import Head from 'next/head'
import { SITE_NAME } from "../../constants/site";

export default function BlankLayout(props) {
  console.log(props)
  const { title } = props
  return (
    <Pane padding="0" clearfix>
      <Head>
        <title>{SITE_NAME}{title && ` - ${title}`}</title>
      </Head>
      { props.children }
    </Pane>
  )
}
