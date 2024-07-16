<a name="readme-top"></a>

<div align="center">
<a href="https://orgnizehub-app.vercel.app">
  <img width="100px" src="https://github.com/user-attachments/assets/9cf34d42-ca57-4776-b9b9-e3e3195b37bb" alt="Logo" />
</a>

## OrganizeHub
Trello clone with project management functionalities such as customizable boards, lists, and cards, real-time collaboration
</div>

<details>
<summary>Table of Contents</summary>

- [Screenshots of OrganizeHub website](#screenshots-of-organizehub-web)
- [To begin](#to-begin)
  - [Prerequisites](#prerequisites)
  - [Install](#Install)
- [🛠️ Stack](#️-stack)

</details>

### Screenshots of OrganizeHub website

![Web screenshot](https://github.com/user-attachments/assets/0a87c5f9-10b4-409b-92cb-17ac4898f061)
![Mobile screenshot](https://github.com/user-attachments/assets/8210dc75-420c-49a1-91db-e73b17359c74)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## To begin

### Prerequisites

- NVM (recommended to ensure Node version) see [official documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # or
  nvm use <version>
  ```

  > If you want to automate the process, you can create a script following the [official documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Small automation script</summary>
	
- Linux/MacOS:
	```sh
	# .bashrc | .zshrc | any configuration file
	# small script to change version when entering the directory
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# If you want to get the version
			nvm use
		fi
	}
	```

- Windows:

  ```powershell
  # $PROFILE
  function Change-Node-Version {
  	param($path)
  	& Set-Location $path
  	$pwd = pwd
  	if ( Test-Path "$pwd\\.nvmrc" ) {
  		$version = Get-Content .nvmrc
  		nvm use $version
  	}
  }
  New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
  ```

  </details>

  - PNPM (it is our recommendation for its efficiency and speed)

  ```sh
  npm install -g pnpm
  ```

  - o NPM

  ```sh
  npm install npm@latest -g
  ```

  ### Install

    1. Clone repo
  
     ```sh
     git clone https://github.com/Damnndev/orgnizehub-app.git
     ```
    2. Install NPM packages
  
     ```sh
     pnpm install
     ```
  
    3. Run the project	
     ```sh
     pnpm run dev
     ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠️ Stack

- [![Next][next-badge]][next-url] - The React Framework for the Web.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![Tailwind CSS][tailwind-badge]][tailwind-url] - A utility-first CSS framework for rapidly building custom designs.
- [![MySQL][mysql-badge]][mysql-url] - The world's most popular open source database.
- [![Prisma][prisma-badge]][prisma-url] - Prisma provides the best experience to work and interact with databases.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[next-badge]: https://img.shields.io/badge/Next.js-fff?style=for-the-badge&logo=nextdotjs&logoColor=000000&color=fff
[next-url]: https://nextjs.org/
[mysql-url]: https://www.mysql.com/
[mysql-badge]: https://img.shields.io/badge/MySQL-ffffff?style=for-the-badge&logo=mysql&logoColor=38bdf8
[prisma-url]: https://www.prisma.io/
[prisma-badge]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=2D3748&color=fff
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8


