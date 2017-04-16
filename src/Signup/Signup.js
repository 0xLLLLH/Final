import React, {Component} from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class Signup extends Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Signup;
