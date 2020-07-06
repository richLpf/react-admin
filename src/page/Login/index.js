import React, { Fragment } from 'react'
import LoginForm from './loginForm'
import { Card } from 'antd'

function Login(){
    return <Fragment>
            <Card title="登录" className="loginCard">
                <LoginForm />
            </Card>
    </Fragment>
}

export default Login