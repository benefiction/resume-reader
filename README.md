<p align="center">
  <img height=200 width=200 src="https://user-images.githubusercontent.com/2339108/158376309-3e677aef-108c-43ca-b1b0-ed1465e1b6ff.png#gh-dark-mode-only" />
  <img height=200 width=200 src="https://user-images.githubusercontent.com/2339108/158376214-8b842f9c-b27b-40ca-bfb8-f5832c5088b1.png#gh-light-mode-only" />
</p>
 <h1 align="center">resume-reader</h1>


<p align="center">
   <a aria-label="Maintainability" href="https://codeclimate.com/github/benefiction/resume-reader/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/478d92c69e9eb91d545e/maintainability">
  </a>
  <a aria-label="Test Coverage" href="https://codeclimate.com/github/benefiction/resume-reader/test_coverage">
    <img alt="" src="https://api.codeclimate.com/v1/badges/478d92c69e9eb91d545e/test_coverage">
  </a>
  
</p> 

## About
Resume reader is an app to interpret data from a resume JSON file in a nice and neat way (for more information about the resume JSON initiative check [here](https://jsonresume.org/)).


1. [Development](#development)
2. [Configuration](#configuration)


## Development

**Node** and **npm** are pre-requirements to start developing. Run `npm i` and you are good to go.

### Available Commands

#### Start the development server

```
npm run start
```

Will start the development server provided by parcel.


#### Run the tests

```
// without coverage report 
npm run test

// with coverage report 
npm run test:ci
```

Will run the tests. Test implementation is done with Jest & React Testing Library.

*`npm run test:ci` is also executed as pre-commit hook*


#### Create a Deployment package

```
npm run build
```

Will create the deployment artifacts using Parcel and place them in the `<project-root>/dist` directory. 

#### Linting & Formating

```
// will run eslint and fix fixable issues 
"format:lint": "eslint . --ext 'src/**/*.{js,jsx,ts,tsx,json}' --fix",
    
// will run prettier and fix fixable issues 
"format:prettier": "prettier --config .prettierrc --write 'src/**/*.{js,jsx,ts,tsx,json}'",
    
// will run prettier + eslint and fix all fixable issues 
"format": "npm run format:lint && npm run format:prettier",
    
```

Will create the deployment artifacts using Parcel and place them in the `<project-root>/dist` directory. 

*`npm run format` is also executed as pre-commit hook*

## Configuration

### Theming & Colors

The resume-reader supports a dark mode which can't be triggered manually yet but depends on the browser/os configuration.

Changes to the colors can be done in the [src/styles/variables.css](src/styles/variables.css) file.

* `--color-common:` Color used for text and high contrast elements (_high contrast to the `--color-bg-highlight` color_).
* `--color-accent:` Color to higlight elements or text (_high contrast to the `--color-bg-highlight` and `--color-common` color_).
* `--color-accent-alternate:` Variation of the `--color-accent` color, slightly lighter or darker. 
* `--color-inferior:` Color for elements that should get less attention.
* `--color-inferior-alternate:` Variation of the `--color-inferior` color, slightly lighter or darker.
* `--color-bg-main:` Color that highlights the resume sheet (slight contrast to `--color-bg-highlight`) a not visible on mobile.
* `--color-bg-highlight:` Background color for the resume sheet.

### Resume source

The source from where the resume is fetched can be configured in the [app_config.json](src/app_config.json) file.

* `RESUME_BASE_URL:` Base URL to the origin of your resume JSON file (without a trailing slash)
* `RESUME_DEFAULT_PATH:` Path to your resume JSON file on the origin (with a leading slash)

The path of the resume JSON file (`RESUME_DEFAULT_PATH`) can be overwritten by the URL parameter `resumePath`, which enables you to provide a link to a more detailed version of your resume, including information that is supposed to be nonpublic (e.g. your cellphone number). 

An example URL including the path overwrite parameter for the resume path could look like this: 
`https://benefiction.github.io?resumePath=more_detailed_resume.json`
