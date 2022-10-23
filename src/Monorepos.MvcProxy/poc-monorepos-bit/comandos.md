# bit.dev

## Instalação
$ npx @teambit/bvm install

or

$ npm i -g @teambit/bvm
$ bvm install
$ bvm upgrade

### Setando o proxy
$ bvm config set proxy http://proxy.example.com:8080
$ bvm config set https_proxy https://proxy.example.com:8080

$ bit config set proxy http://proxy.example.com:8080
$ bit config set https_proxy https://proxy.example.com:8080

------------------------------------------------------------------------------------------------------------------------------------------------------

## Criar workskpace
$ bit new ng-workspace <workspace-name> -a teambit.angular/angular --default-scope <my-org>.<my-scope>

### Iniciar workspace
$ cd <workspace-name>
$ bit start

### Obter status do workskpace
$ bit status

### Listar components do workspace
$ bit list

### Listar apps do workspace
$ bit app list

### Visualizar possiveis templates
$ bit templates

#### Criar component simples
$ bit create ng-module <my>/<component-name> --scope <my-org>.<my-scope>
$ bit install

### Criar component app angular
$ bit create ng-app <my>/<app-name> --env teambit.angular/angular --scope <my-org>.<my-scope>
$ bit install
$ bit compile

### Importar component
$ bit import <my-org>.<my-scope>/<my>/<app-name>

### Importar dependentes
$ bit import <my-org>.<my-scope>/<my>/<app-name> --dependents

## Rodar um app
$ bit use <my-org>.<my-scope>/<my>/<app-name>
$ bit run <my-app-name>

### Inspecionar metadas do component
$ bit show my-scope/component-name

--------------------------------

## Colaboração

### Adicionar scopo remote
$ bit scope set <my-org>.<my-scope> <my>/<component>

### Criar snap do scope
$ bit snap <my>/<component-name> --message "initial snap"

### Criar uma tag
$ bit tag <my>/<component-name> --message "release inicial"

### Fazer login no bit.cloud
$ bit login

### Exportar para o scopo remoto
$ bit export

### Testar
$ bit test