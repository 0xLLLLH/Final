import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginForm.scss';

const FormItem = Form.Item;

const NormalLoginForm  = ({form, onSubmit, className}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const {userName, password} = values;
                onSubmit(userName, password);
                console.log('Received values of form: ', values);
            }
        });
    }
    const { getFieldDecorator } = form;
    return (
        <Form onSubmit={handleSubmit} className={className || 'login-form'}>
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入你的用户名!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入你的密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住密码</Checkbox>
                    )}
                <a className="login-form-forgot" href="">找回密码</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
            </FormItem>
        </Form>
    );
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;