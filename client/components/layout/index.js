import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export default class Layouts extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="wrapper">
                <Layout>
                    <Header className="header">
                        <Icon type="github" />
                    </Header>
                    <Layout>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                    <Menu.Item key="1"><Link to='/create'>创建文章</Link></Menu.Item>
                                    <Menu.Item key="2">修改文章</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                {children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}