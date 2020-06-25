import useSWR from 'swr'
import { Fragment } from 'react'
import Button from '../src/components/Button'
import { useFetch } from '../src/hooks/hookFetch'

function Profile() {
  const { data } = useFetch('POST', 'http://api.wikiforest.com')
  return (
    <Fragment>
      <Button />
      <ul>
        {!data && <li>加载中...</li>}
        {data && data.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://127.0.0.1:2333`)
//   const posts = await res.json()
//   return {
//     props: {posts}, // will be passed to the page component as props
//   }
// }

export default Profile
