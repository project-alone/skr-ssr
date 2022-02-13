import { faker } from '@faker-js/faker'

export interface User {
	id: number
	title: string
	client: string
	area: string
	country: string
	contact: string
	assignee: string
}

const userList: NextApiHandler = (req, res) => {
	let data: User[] = []

	for (let i = 0; i < 1000; i++) {
		data.push({
			id: i,
			title: `Task #${i + 1}`,
			client: faker.company.companyName(),
			area: faker.name.jobArea(),
			country: faker.address.country(),
			contact: faker.internet.exampleEmail(),
			assignee: faker.name.findName(),
		})
	}

	res.status(200).json(data)
}

export default userList
