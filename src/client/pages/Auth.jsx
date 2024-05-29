import React, { useState, useEffect } from "react";
import "../styles/Auth.scss";
// Images
import welcome from "../assets/welcome.jpg";
import logo from "../assets/logo.png";
// Antd components
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
// Firebase
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { app } from "../../server/Auth";
// Import navigation comp
import { useNavigate } from "react-router-dom";

//
export default function Authentication() {
    // Navigate
    const navigate = useNavigate();

    // Email and password State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Firebase auth from suth server
    const auth = getAuth(app);

    // Login Function
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/explore");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    // Register Function
    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Welcome");
                navigate("/explore");
            })
            .catch((error) => {
                alert("Please Login");
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/explore");
            } else {
                navigate("/");
            }
        });
    }, []);
    return (
        <div className="auth_screen">
            <div className="left_side">
                <img src={welcome} alt="" />
            </div>
            <div className="right_side">
                <img className="logo" src={logo} alt="" />
                <h3>Welcome to The Movie DB</h3>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}>
                    <Form.Item
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}>
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Email"
                            onInput={(e) => setEmail(e.target.value)}
                            pattern="email"
                            autoFocus
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}>
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={handleLogin}>
                            Log in
                        </Button>
                        Or <a onClick={handleRegister}>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
