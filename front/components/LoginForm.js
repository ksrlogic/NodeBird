import React, { useState, useCallback } from "react"
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'

import { loginAction } from '../reducers'


const ButtonWrapper = styled.div`
    margin-top: 10px;
`
const FormWrapper = styled(Form)`
    padding: 10px;
`
const LoginForm = () => {
    const dispatch = useDispatch();
    const [id ,onChangeId] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitForm = useCallback(() => {
        dispatch(loginAction({id, password}))
    }, [id, password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId}/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <Input name="user-id" type="password" value={password} onChange={onChangePassword} required="true"/>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            <div>

            </div>            
        </FormWrapper>
    );
};

export default LoginForm;