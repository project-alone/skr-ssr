import { Controller, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Button, Checkbox, Input, Form, Select, Radio } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import { omit } from 'lodash-es'

type SignUpFormData = {
	userId: string
	password: string
	term: boolean
	fruits: string[]
	animals: string
	alphabet: string
}

const Alert = styled.strong`
	color: red;
`

const Message: React.FC<{ message: string }> = ({ message }) => {
	return <Alert>{message}</Alert>
}

const scheme = yup.object({
	userId: yup.string().required('입력값이 없습니다.'),
	password: yup
		.string()
		.required('비밀번호를 입력해주세요.')
		.min(8, '8자 이상이어야 합니다.')
		.max(12, '12자리 이하여야 합니다.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/g,
			'대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상 포함하여야 합니다.',
		),
	term: yup.boolean(),
	fruits: yup
		.array()
		.of(yup.string())
		.min(2, '2개 이상 선택')
		.required('선택하세요'),
	animals: yup.string().required('선택해주세요'),
	alphabet: yup.string().required('알파벳을 선택해주세요'),
})

export default function SignUpPage() {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<SignUpFormData>({
		mode: 'onBlur',
		resolver: yupResolver(scheme),
		defaultValues: {
			term: false,
		},
	})

	const onSubmit = handleSubmit((data) => {
		console.log('submit data : ', data)
	})

	console.log(errors)

	return (
		<Form onFinish={onSubmit}>
			<Controller
				control={control}
				name="userId"
				render={({ field }) => (
					<Input placeholder="이메일" type="text" {...field} />
				)}
			/>
			<ErrorMessage errors={errors} name="userId" render={Message} />

			<Controller
				control={control}
				name="password"
				render={({ field }) => (
					<Input placeholder="비밀번호" type="password" {...field} />
				)}
			/>
			<ErrorMessage errors={errors} name="password" render={Message} />
			<div>
				<span>저장 여부</span>
				<Controller
					control={control}
					name="term"
					render={({ field }) => (
						<Checkbox
							checked={field.value}
							{...omit(field, 'value')}
						/>
					)}
				/>
			</div>
			<div>
				<Controller
					control={control}
					name="fruits"
					render={({ field }) => (
						<Checkbox.Group
							{...field}
							options={[
								{ label: '사과', value: 'apple' },
								{ label: '오렌지', value: 'orange' },
								{ label: '바나나', value: 'banana' },
								{ label: '딸기', value: 'strawberry' },
							]}
						/>
					)}
				/>
				<ErrorMessage errors={errors} name="fruits" render={Message} />
			</div>

			<div>
				<Controller
					control={control}
					name="animals"
					render={({ field }) => (
						<Select placeholder="동물 선택" {...field}>
							<Select.Option value="lion">사자</Select.Option>
							<Select.Option value="rabbit">토끼</Select.Option>
							<Select.Option value="monkey">원숭이</Select.Option>
							<Select.Option value="cow">젖소</Select.Option>
							<Select.Option value="tiger">호랑이</Select.Option>
						</Select>
					)}
				/>
				<ErrorMessage errors={errors} name="animals" render={Message} />
			</div>

			<div>
				<Controller
					control={control}
					name="alphabet"
					render={({ field }) => (
						<Radio.Group {...field}>
							<Radio value="a">A</Radio>
							<Radio value="b">B</Radio>
							<Radio value="c">C</Radio>
							<Radio value="d">D</Radio>
							<Radio value="e">E</Radio>
						</Radio.Group>
					)}
				/>
				<ErrorMessage
					errors={errors}
					name="alphabet"
					render={Message}
				/>
			</div>

			<div style={{ marginTop: '50px' }}>
				<Button type="primary" htmlType="submit">
					submit
				</Button>
			</div>
		</Form>
	)
}
