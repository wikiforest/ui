import DefaultLayout from '../../src/components/layouts/DefaultLayout'
import { Pane, TextInput, TextInputField, Heading, Button } from 'evergreen-ui'
import { Component } from 'react'
import { SITE_NAME } from '../../src/constants/site'
import Link from 'next/link'

function Profile() {
  return (
    <DefaultLayout billboard={true}>
      <Pane className="d-flex d-md-block justify-content-center">
        <Pane className="w-50 w-md-100 d-inline-block p-3 py-5">
          <h1 className="text-center">{SITE_NAME}</h1>
          <p className="font-weight-lighter text-center">{SITE_NAME}将由您来构筑。</p>
          <form className="p-4" style={{borderRadius: '10px'}}>
            <TextInputField
              label="电子邮件"
              inputHeight={40}
              id="username"
              name="username"
              placeholder="电子邮件"
            />
            <TextInputField
              label="密码"
              id="password"
              inputHeight={40}
              name="password"
              type="password"
              placeholder="请输入密码"
            />
            <TextInputField
              label="确认密码"
              id="password_re"
              inputHeight={40}
              name="password_re"
              type="password"
              placeholder="请再次输入密码"
            />
            <TextInputField
              label="昵称"
              id="nickname"
              inputHeight={40}
              name="nickname"
              placeholder="我们该怎样称呼您"
            />
            <div>
              <Button size={500} marginRight={15} appearance="primary" intent="none">提 交</Button>
              <small className="text-small">
                已有账号？赶快
                <Link href="/user/signin">
                  <a>去登录</a>
                </Link>
                吧
              </small>
            </div>
          </form>
        </Pane>
      </Pane>
    </DefaultLayout>
  )
}

export default Profile
