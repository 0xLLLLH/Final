import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import './SignupForm.scss';

const FormItem = Form.Item;

const NormalSignupForm = ({ form, onSubmit, className }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const { userName, password } = values;
                onSubmit(userName, password);
                console.log('Received values of form: ', values);
            }
        });
    };
    const handleConfirmPassword = (rule, value, callback) => {
        const { getFieldValue } = form;
        if (value && value !== getFieldValue('password')) {
            callback('两次输入不一致！');
        }

        // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
        callback();
    };
    const { getFieldDecorator } = form;

    return (
        <Form onSubmit={handleSubmit} className={className || 'signup-form'}>
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
                {getFieldDecorator('passwordRepeat', {
                    rules: [
                        {
                            required: true, message: '请再次输入你的密码!'
                        },
                        {
                            validator: handleConfirmPassword
                        }
                    ],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="再次输入密码" />
                    )}
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" className="signup-form-button">
                    注册
                </Button>
            </FormItem>
        </Form>
    );
};

const WrappedNormalSignupForm = Form.create()(NormalSignupForm);

export default WrappedNormalSignupForm;
