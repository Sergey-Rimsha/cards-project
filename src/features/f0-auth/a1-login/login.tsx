import {ChangeEvent} from 'react';

import {TextField} from '../../../components/c4-Textfield/TextField';

import SuperCheckbox from '../../../components/c3-SuperCheckbox/SuperCheckbox';
import {useAppSelector} from '../../../store/store';

import s from './login.module.scss';

type LoginPropsType = {
	email: string
	password: string
	activeLoginBtn: boolean
	rememberMe: boolean
	onChangeHandlerEmail: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeHandlerPassword: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeChecked: (e: ChangeEvent<HTMLInputElement>) => void
	onSubmitHandler: () => void
	redirectLink: () => void
	navigateRegistration: () => void
}

export const Login = (props: LoginPropsType) => {

	// const error = useSelector<AppRootStateType, string | undefined>(state => state.auth.error);

	const error = useAppSelector<string | undefined>(state => state.auth.loginError);

	// console.log('render login');

	return (
		<section className={s.blockLogin}>
			<div className={s.login}>
				<h2 className={s.login__logo}>It-incubator</h2>
				<form className={s.form}>
					<h3 className={s.form__title}>Sign In</h3>

					<div className={s.form__group}>
						<TextField
							label={'Email'}
							onChange={props.onChangeHandlerEmail}
							value={props.email}
							type={'text'}/>
					</div>

					<div className={s.form__group}>
						<TextField
							label={'Password'}
							onChange={props.onChangeHandlerPassword}
							value={props.password}
							type={'password'}/>
					</div>

					<SuperCheckbox onChange={props.onChangeChecked} checked={props.rememberMe}>
						remember Me
					</SuperCheckbox>

					<div className={s.form__forgot}>
						<span onClick={props.redirectLink}>Forgot Password</span>
					</div>

					{/*показываем ошибку если отправка api не удалась*/}
					<span className={s.form__errorMessage}>{error}</span>

					<div className={s.form__buttonWrap}>
						{/*<Button*/}
						{/*	disabled={props.activeLoginBtn}*/}
						{/*	onClick={props.onSubmitHandler}*/}
						{/*	width={'266px'}>*/}
						{/*	Login*/}
						{/*</Button>*/}
						{/*<button className={s.form__button} type={'submit'}>Login</button>*/}

						<button
							className={s.form__button}
							onClick={props.onSubmitHandler}>
							Login
						</button>
					</div>
				</form>
				<div className={s.login__quest}>
					Don’t have an account?
				</div>
				<div
					className={s.login__subTitle}
					onClick={props.navigateRegistration}>
					Sign Up
				</div>
			</div>
		</section>
	);
};