# website-portfolio-template

Target repository for a website portfolio model.

> ***Current version: v2.1.0***

---

## Preview & prototype
- If you want to see how it looks: [preview](https://rithienatan.github.io/website-portfolio-template/)
- Prototype: 

![](./docs/prototype-website-curriculum.PNG)

---

## Resources used and References

- Prototype made with: [AdobeXD](https://www.adobe.com/br/products/xd.html)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Library: [React](https://pt-br.reactjs.org/)
- Frameworks: [Material UI](https://mui.com/) and [NextJS](https://nextjs.org/)
- Background:
   - [Particle.js - by Vincent Garreau](https://vincentgarreau.com/particles.js/)
   - [Install tsParticles for React](https://particles.js.org/)
- Versioning Rules: [Semantic Versioning](https://semver.org/)

---

## How to deploy into Github Pages

- Goes to repository settings.
- Select Pages options on left side. 
- Choose "source" via Github Actions.
- Create folders .github/workflows into root directory.
- Create .yml inside ".github/workflows" and create your script.
- git add .github/
- git commit
- git push origin main-branch
- Github Action will run after push.

References: [Github Actions quickstart](https://docs.github.com/en/actions/quickstart)

.yml example: [build and deploy next app](https://github.com/rithienatan/website-portfolio-template/blob/master/.github/workflows/build-and-deploy.yml)


---

## Patch Notes

- v2.1.0: Update documentation. Implements actions in order to deploy into github pages.
- v2.0.0: Change project based modules. Refactor pure ReactJS to NextJS and JavaScript to TypeScript. Update particlejs to tsparticles.
- v1.0.0: Stable version of curriculum vitae model.

---

## License

Copyright 2023 Rithie Natan Carvalhaes Prado

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
