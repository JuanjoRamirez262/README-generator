const {writeTitle, writeDescription, writeLicenses, writeTable, writeInstallation, writeUsage, writeConstribution, writeTests, writeLicensesDescription, writeQuestions} = require('./fileWriter')
const {askUser} = require('./promptUser')

const init = async () => {
    try {
        const input = await askUser()

        await writeTitle(input.title)
        await writeLicenses(input.license)
        await writeDescription(input.description)
        await writeTable()
        await writeInstallation(input.instructions)
        await writeUsage(input.usageInfo)
        await writeLicensesDescription(input.license)
        await writeConstribution(input.contribution)
        await writeTests(input.test)
        await writeQuestions(input.name, input.github, input.email)


    } catch (err) { console.error(err) }
}

init()