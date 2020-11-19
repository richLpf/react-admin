import React, { Suspense } from 'react'
//import routes from '@/router'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Spin } from 'antd'
const { Content } = Layout

function ContentComponent(props){

    const { routes } = props

    console.log("routes", routes)

    const hasChild = (menu) => {
        const { children } = menu
        return Array.isArray(children)&&children.length > 0
    }

    const genRoute = (menu) => {
        const { key, component } = menu
        return (
           key?<Route exact key={key} path={key} component={component} />:<Route key='404' component={component} />
        )
    }

    const genRoutes = (menu) => {
        return menu.reduce((prev, next) => {
            return prev.concat(
                hasChild(next)?genRoutes(next.children):genRoute(next)
            )
        }, [])
    }
    return  <Content
            className="site-layout-background"
            style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
            }}>
            <Suspense
                fallback={
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Spin tip="Loading..." />
                  </div>
                }
              >
                <Switch>
                    {genRoutes(routes)}
                </Switch>
            </Suspense>
    </Content>
}

export default ContentComponent
