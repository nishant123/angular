# Currency Converter

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v14 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/yIYeU82m7pJjGXw3jfpLjQ/currency-converter.gif)

## Functionality Requirements

Complete a partially completed Angular application that converts the Japanese Yen to US Dollars and vice versa.

Certain core Angular functionalities have already been implemented. Complete the Angular application as shown below in order to pass all the unit tests.

The application has the following functionalities:

- The app has two components:
  - The `UsdValue` component, which has a textbox to type/show US Dollars value.
  - The `YenValue` component, which has a textbox to type/show Japanese Yen value.

- The following list of actions should be supported by the app:
  - Enter the value in `UsdValue` textbox to convert it into Japanese Yen and render correctly in the `YenValue` textbox
  - Delete text from either textboxs
  - Enter the value in `YenValue` textbox to convert it into US Dollars and render correctly in the `UsdValue` textbox

- Tests take care of testing with valid number inputs and show all decimal points.

- The currency conversion rates to be used are given as follows:

|  | Japanese Yen | US Dollar |
| :---: | :---: | :---: |
| Japanese Yen | 1 | 0.0090 |
| US Dollar	 | 110 | 1 |

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The UsdValue textbox should the data-test-id attribute 'usd-value'.
- The YenValue textbox should have the data-test-id attribute 'yen-value'.

## Project Specifications

**Read-only Files**
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
