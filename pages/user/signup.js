import { Pane, TextInput, TextInputField, Text, Button } from 'evergreen-ui'
import { Component } from 'react'
import { SITE_NAME } from '../../src/constants/site'
import Link from 'next/link'
import BlankLayout from '../../src/components/layouts/BlankLayout'

function Profile() {
  return (
    <BlankLayout billboard={true} title="账户注册">
      <Pane className="d-flex justify-content-center px-3 py-5 py-xs-2">
        <Pane
          style={{borderRadius: '10px', maxWidth: '450px', width: '100%'}}
          className="d-inline-block p-3 py-5 border bg-white"
        >
          <h1 className="text-center">{SITE_NAME}</h1>
          <p className="font-weight-bold text-center" style={{color: '#adb5bd'}}>认识世界，也让世界认识你</p>
          <form className="p-4">
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
    </BlankLayout>
  )
}

export default Profile
