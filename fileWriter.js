const fs = require('fs')
const { titleText, descriptionText, licenseText, tableContent, instalationsText, usageText, constributionText, testsText, licenceDesc, questionText} = require('./text')

const writeTitle = (title) => {
    fs.writeFileSync('README2.md', titleText(title))
}

const writeDescription = (description) => {
    fs.appendFileSync('README2.md', descriptionText(description))
}

const writeLicenses = (licenses) => {
    for (let i = 0; i < licenses.length; i++) {
        fs.appendFileSync('README2.md', licenseText(licenses[i]))
    }
}

const writeTable = () => {
    fs.appendFileSync('README2.md', tableContent())
}

const writeInstallation = (instructions) => {
    fs.appendFileSync('README2.md', instalationsText(instructions))
}

const writeUsage = (usageInfo) => {
    fs.appendFileSync('README2.md', usageText(usageInfo))
}
const writeLicensesDescription = (lic) => {
    fs.appendFileSync('README2.md', '## Licenses \n\n')
    for (let i = 0; i < lic.length; i++) {
        fs.appendFileSync('README2.md', licenceDesc(lic[i]))
    }
}

const writeConstribution = (contribution) => {
    fs.appendFileSync('README2.md', constributionText(contribution))
}

const writeTests = (test) => {
    fs.appendFileSync('README2.md', testsText(test))
}

const writeQuestions = (name, github, email) => {
    fs.appendFileSync('README2.md', questionText(name, github, email))
}

module.exports = {
    writeTitle,
    writeDescription,
    writeLicenses,
    writeTable,
    writeInstallation,
    writeUsage,
    writeConstribution,
    writeTests,
    writeLicensesDescription,
    writeQuestions
}