const titleText = (title) => {
    return `# ${title} \n\n`
}

const descriptionText = (description) => {
    return `## Description
    
${description} \n\n`
}

const licenseText = (license) => {
    switch(license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n\n`
        case "ISC":
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) \n\n`
        case "Apache 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n\n`
    }

}

const tableContent = () => {
    return `## Table of content
* [Description](#description)
* [Instalation](#installation)
* [Usage Information](#usage-information)
* [Contribution guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)

\n\n`
}

const instalationsText = (instructions) => {
    return `## Installation

To run this project, install it locally using npm:
\`\`\`
${instructions}
\`\`\`\n\n`
}

const usageText = (usageInfo) => {
    return `## Usage Information
    
${usageInfo}\n\n`
}

const licenceDesc = (lic) => {
    switch(lic) {
        case "MIT":
            return `### MIT license

Copyright <2021> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n`
        case "ISC":
            return `### ISC license

Copyright <YEAR> <OWNER>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
            
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n\n`
        case "Apache 2.0":
            return ` ### Apache 2.0
            
Copyright [2021] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
         
http://www.apache.org/licenses/LICENSE-2.0
         
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.\n\n`
    }
}

const constributionText = (contri) => {
    return `## Contribution guidelines
    
${contri}\n\n`
}

const testsText = (test) => {
    return `## Tests
    
${test}\n\n`

}


const questionText = (name, github, email) => {
    return `## Questions
    
[${name} Github profile](https://github.com/${github})

email: ${email}\n\n`
}

module.exports = {
    titleText,
    descriptionText,
    licenseText,
    tableContent,
    instalationsText,
    usageText,
    constributionText,
    testsText,
    licenceDesc,
    questionText
}