# React

# Episode 1: Intro
Basic html, css, html through js, html through react (git)

# Episode 2: Starting the app
* Package.json is a configuration for npm.
* Bundler packages our app for it to be deployed to production.(webpack, parcel, wheat?)
  Create react app useds webpack.
* 2 types of dependencies: Dev & Normal
* ^ caret- minor update-prefered
  ` tilde- major update
* package-lock.json:has exact version of dependencies.
                    integrity: hash to verify local & production versions are same.
* Transitive dependencies: project dependency-->parcel dependency-->x dependency-->y dependency-->.....
  Parcel has its own package.json which contains its dependencies. This chain goes on.
* node_modules,dist, .parcel-cache in .gitignore. As package.json & package-lock.json have dependencies & node_modules can 
  be regenerated ongit/ production.node_modules if deleted can be regenerated from npm install.
  With-Create react App these things can be bypassed.
* npm-installs a package. "npx parcel index.html" executes package. It builds a development build of our app and hosts it on 
  localhost.
* Parcel: 1.Build 2.server 3.HMR-Hot module replacement(auto refresh) using a File watching algorithm(C++)
          4.faster build using caching 5.Image optimization 6.Minification(productionbuild) 7.Bundling 8.Compressing
          9.Consistent hashing 10.Code splitting 11.Differencial bundling(support older browser) 12.Diagnostics
          13.Error handling 14.HTTPs 15. Tree shaking-remove unused code
* cdn links is not a good way to import react & ReactDOM to our project as it is an external call & verions keep changing
  installing package(npm install react & ReactDOM, import) is a better way.
  Add type=module in app.js.
* Remove main: App.js in package.json as it is generated by parcel.
* npx parcel build index.html=> generates a dev build & hosts in localhost through dist folder. Parcel uses cache & dist only.
* browserslist in dependencies: to make it Compatible with specific browser(100%. It might work on more browsers).
  Check document. Specific queries possible- Eg: Country specific.

# Episode 3: Foundation
* Instead of running commands like "npx parcel index.html" repeatedly, we place them as script in package.json.
  To run: npm run start/ npm start(start being the name of the script for "npx parcel index.html")
* render will replace(not append) element if already present in root. Anything outtside route will be displayed by default. only
  rendered element root will be replaced.
* JSX: is a js syntax which makes creating react elements easy/ *readable. Though React can be used without JSX. It enables merging
  HTML,CSS & JS. JSX is not HTML in JS, its a different syntax. It is a HTML/XML like syntax.(class(html)=className(jsx), no "-",
  camelCase,multiple lines=> wrap in parenthesis) 
  Browser does not understand JSX syntax as its not valid js syntax. Parcel transpiles the code so that its executed thru Babel.
  Babel is an open source JS compiler/ trans compiler(converts code to different form-eg older version of browser).
  JSX=> React.createElement => ReactElement.JS object => HTMLelement(render)
* React component: Everything in React. 2 types: 1.Class based(old) 2. Functional component(new)- A function that returns a React 
  element/ JSX.
  1.const HeadingComponent =()=>{
    return <h1>React functional component!</h1>;
    }
  2.const HeadingComponent =()=><h1>React functional component!</h1>;
  3.const HeadingComponent =()=>(
    <h1>React functional component!</h1>;
    )
       1==2==3
* Component composition: compoment inside a component using <Compoment/> or <Component><component/> or {Compoment();}
* {}: any js code can be written inside this in jsx. constant, title etc. JSX prevents malicious attacks by sanitising it.
* JSX can have only one root/parent element. Child can be many. Therefore React fragment:
  Instead of wraping 2 divs inside another div, wrap it inside <React.Fragment><React.Fragment/> or <></>(empty tag)

# Episode 4: Food ordering app

 ---------------------------------------------------------    Header:
|   _________________ Header __________________________  |    -Logo
|  | Logo                         Header About   Cart  | |    -Nav items 
|  |___________________________________________________| |    
|   ____________________Body_________________________  | |    
|  |   --------  Search                                | |    Body:
|  |   --------                                        | |    -Search
|  |   1    2     3                                    | |    -1-6 Restaurant cards with name, image, rating
|  |                                                   | |     Restaurant container with Restaurant cards.
|  |   4    5     6                                    | |
|  | __________________________________________________| |    Footer:                                            
|    _________________ Footer __________________________ |    -copyright
|  |                                                    ||    -links
|  |____________________________________________________||    -Address, contact
|________________________________________________________|

Restaurant cards: img, name of rest, rating, cuisine, delivery time

* style attribute in jsx takes a object. inline style also possible(not good practice)-style={{backgroundColor="#f0f0f0"}}
  4 ways: CSS, seperate class as in code, inline, tailwind
* Props: pass dynamic data to a component. Passing a prop to a compoment is similar to passing argument to a function.
  Destructuring on the fly: instead of passing prop pass {reaName, cuisine}
* Config driven UI: Website id driven by config(data)
* resData?.data- optional chaining
* While looping each child should have a unique key(id)-Donot use index as keys, bad practice. Because in case of addition of 
  new card/ element whole thing is executed again if key is not assigned. Performance issue.